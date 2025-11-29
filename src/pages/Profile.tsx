import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { User, Mail, Lock } from "lucide-react";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");

  const handleSave = () => {
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Card className="p-8">
        <div className="space-y-8">
          {/* Avatar Section */}
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl gradient-primary text-white">
                {name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold mb-1">Profile Picture</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Update your avatar by changing your profile name
              </p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
            
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-6 pt-6 border-t border-border">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security
            </h3>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Password</p>
                <p className="text-sm text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
              <Button variant="outline">Change Password</Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6">
            <Button onClick={handleSave} className="gradient-primary">
              Save Changes
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </Card>

      {/* Statistics Card */}
      <Card className="p-8">
        <h3 className="text-lg font-semibold mb-6">Your Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Total Evaluations</p>
            <p className="text-3xl font-bold">6</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Average Score</p>
            <p className="text-3xl font-bold text-success">83</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Member Since</p>
            <p className="text-3xl font-bold">2024</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
