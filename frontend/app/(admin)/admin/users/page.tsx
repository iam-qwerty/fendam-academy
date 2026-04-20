"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api/fetcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [roleFilter, setRoleFilter] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({ page: String(page) });
    if (roleFilter) params.set("role", roleFilter);

    apiFetch<UsersResponse>(`/admin/users?${params}`)
      .then((res) => {
        setUsers(res.data);
        setTotalPages(res.totalPages);
      })
      .catch(() => {
        toast.error("Failed to load users");
      })
      .finally(() => setLoading(false));
  }, [page, roleFilter]);

  if (loading && users.length === 0) {
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
                setLoading(true);
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
              <th className="text-left px-4 py-3 font-medium">Status</th>
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
                  <Badge variant="outline" className="capitalize">
                    {user.role}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {user.studentProfile?.track.name || "—"}
                </td>
                <td className="px-4 py-3">
                  {user.studentProfile ? (
                    <div className="space-y-1">
                      <Badge
                        variant={
                          user.studentProfile.enrollmentStatus === "enrolled"
                            ? "default"
                            : "secondary"
                        }
                        className="capitalize text-xs"
                      >
                        {user.studentProfile.enrollmentStatus}
                      </Badge>
                    </div>
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
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => {
            setLoading(true);
            setPage((p) => p - 1);
          }}>
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => {
            setLoading(true);
            setPage((p) => p + 1);
          }}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
