import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="items-center justify-center">
      <div className="flex justify-center items-center">
        <img src="https://i.imgur.com/8ToqmB8.png" alt="Ruwe Holy Ghost Church Letter-Head" className="mx-auto mb-4 shadow-lg"/>
      </div>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">

        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Maybe you are looking for a page that doesn't exist or you followed a broken link. If you think this is a mistake, please contact the <a href="https://wa.me/254708581688?text=Sang'onjo%20Ronje%20%F0%9F%91%8F" className="text-red-600 hover:underline" target="_blank" rel="noopener noreferrer">website administrator.</a>. Thank you for your understanding. Go back to <a href="https://dho-roho-translator.vercel.app/" className="text-red-600 hover:underline" rel="noopener noreferrer">Home Page.</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
