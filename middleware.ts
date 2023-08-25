import {authMiddleware} from "@clerk/nextjs";

// https://clerk.com/docs/references/nextjs/auth-middleware
export default authMiddleware({});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
