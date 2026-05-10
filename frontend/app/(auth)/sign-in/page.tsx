import { Suspense } from "react";
import SignInContent from "./SignInContent";

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent" />
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}
