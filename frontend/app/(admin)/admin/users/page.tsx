"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiFetch, ApiError } from "@/lib/api/fetcher";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
  emailVerified: boolean;
  createdAt: string;
  studentProfile: {
    enrollmentStatus: string;
    kycStatus: string;
    track: { name: string };
  } | null;
}

interface UsersResponse {
  data: User[];
  total: number;
  page: number;
  totalPages: number;
}

const VALID_ROLES = ["student", "instructor", "admin"] as const;
const VALID_ENROLLMENT_STATUSES = [
  "applied",
  "pending",
  "approved",
  "enrolled",
  "completed",
] as const;

export default function AdminUsersPage() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [roleFilter, setRoleFilter] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["admin", "users", { page, roleFilter }],
    queryFn: () => {
      const params = new URLSearchParams({ page: String(page) });
      if (roleFilter) params.set("role", roleFilter);
      return apiFetch<UsersResponse>(`/admin/users?${params}`);
    },
    staleTime: 1 * 60 * 1000,
  });
  const users = data?.data ?? [];
  const totalPages = data?.totalPages ?? 1;

  const roleMutation = useMutation({
    mutationFn: ({ userId, role }: { userId: string; role: string }) =>
      apiFetch(`/admin/users/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ role }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      toast.success("Role updated");
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
      else toast.error("Failed to update role");
    },
  });

  const enrollmentMutation = useMutation({
    mutationFn: ({ userId, enrollmentStatus }: { userId: string; enrollmentStatus: string }) =>
      apiFetch(`/admin/enrollment/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({ enrollmentStatus }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "users"] });
      toast.success("Enrollment status updated");
    },
    onError: (err) => {
      if (err instanceof ApiError) toast.error(err.message);
      else toast.error("Failed to update enrollment");
    },
  });

  if (isLoading && users.length === 0) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage users, roles, and enrollment
          </p>
        </div>

        <div className="flex gap-2">
          {["", "student", "instructor", "admin"].map((role) => (
            <Button
              key={role}
              variant={roleFilter === role ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setRoleFilter(role);
                setPage(1);
              }}
            >
              {role || "All"}
            </Button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 font-medium">User</th>
              <th className="text-left px-4 py-3 font-medium">Role</th>
              <th className="text-left px-4 py-3 font-medium">Track</th>
              <th className="text-left px-4 py-3 font-medium">Enrollment</th>
              <th className="text-left px-4 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-border last:border-0">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-medium">{user.name || "—"}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Select
                    value={user.role}
                    onValueChange={(val) => roleMutation.mutate({ userId: user.id, role: val })}
                    disabled={roleMutation.isPending}
                  >
                    <SelectTrigger className="w-[130px] h-8 text-xs capitalize">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {VALID_ROLES.map((role) => (
                        <SelectItem key={role} value={role} className="capitalize">
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {user.studentProfile?.track.name || "—"}
                </td>
                <td className="px-4 py-3">
                  {user.studentProfile ? (
                    <Select
                      value={user.studentProfile.enrollmentStatus}
                      onValueChange={(val) =>
                        enrollmentMutation.mutate({ userId: user.id, enrollmentStatus: val })
                      }
                      disabled={enrollmentMutation.isPending}
                    >
                      <SelectTrigger className="w-[140px] h-8 text-xs capitalize">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {VALID_ENROLLMENT_STATUSES.map((status) => (
                          <SelectItem key={status} value={status} className="capitalize">
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    "—"
                  )}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
