import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Application</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a bare-bones application. Start building your content here.</p>
            <Button onClick={handleClick} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Get Started"
              )}
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;