import React from "react";
import {
  Search,
  Plus,
  Bell,
  MessageCircle,
  Menu,
  X,
  Settings,
  LogOut,
} from "lucide-react";
import Button from "../../components/ui/Button";
import Dropdown, { DropdownHeader, DropdownItem } from "../../components/ui/Dropdown";
import Input from "../../components/ui/Input";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/Avatar";
import { useAuth } from "../../hooks/useAuth";
import avatarImg from "../../assets/avatar.png";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search Events..."
              className="w-64 pl-10 bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Action buttons */}
          <Button
            size="sm"
            variant="secondary"
            className="hidden sm:flex items-center space-x-2"
          >
            <span className="text-black ">New Client</span>
            <Plus className="h-4 w-4 text-black" />
          </Button>

          <Button
            size="sm"
            variant="dark"
            className="bg-gray-800 text-white"
          >
            <span className="">New Work Order</span>
            <Plus className="h-4 w-4 mr-2" />
          </Button>

          {/* Right side icons */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Dropdown
              trigger={
                <button className="flex items-center space-x-2 rounded-full focus:outline-none p-2 cursor-pointer">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={avatarImg} alt="User Avatar" />
                  </Avatar>
                </button>
              }
              align="right"
              width="w-48"
            >
              <DropdownHeader>
                <p className="text-sm font-medium text-gray-900">
                  Hello, {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </DropdownHeader>
              <DropdownItem onClick={handleLogout} className="border cursor-pointer hover:bg-gray-200 rounded-md">
                <LogOut className="h-4 w-4 mr-3" />
                Logout
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;