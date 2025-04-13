import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const INSTAGRAM_AUTH_URL = "https://api.instagram.com/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user_profile,user_media&response_type=code";

export default function InstagramLoginForm() {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    instagramUrl: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInstagramLogin = () => {
    window.location.href = INSTAGRAM_AUTH_URL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace this with your actual Firebase endpoint or API call
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4 text-center">Business Onboarding</h2>
            <Button 
              onClick={handleInstagramLogin}
              className="w-full mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-90"
            >
              Login with Instagram
            </Button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Input
                name="instagramUrl"
                placeholder="Instagram Profile URL"
                value={formData.instagramUrl}
                onChange={handleInputChange}
                required
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
