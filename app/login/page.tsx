import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md p-6 space-y-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-center text-xl font-semibold">Login</h2>
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
            </div>
        </div>
    );
}
