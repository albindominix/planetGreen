import React from "react";
import {
  Home,
  Calendar,
  Box,
  Layers,
  BarChart3,
  BookOpen,
  User,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Calendar, label: "Calendar" },
  { icon: Box, label: "Projects" },
  { icon: Layers, label: "Layers" },
  { icon: BookOpen, label: "Documents" },
  { icon: BarChart3, label: "Analytics" },
  { icon: User, label: "Team" },
  { icon: Settings, label: "Settings" },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 bg-[#141414] transition-all duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${
          sidebarOpen
            ? "w-64 translate-x-0"
            : "w-16 -translate-x-full lg:translate-x-0"
        }
        lg:hover:w-64 lg:w-16
      `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-center border-b border-gray-800 lg:justify-start lg:px-4">
            <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
              <div className="h-4 w-4 rounded bg-gray-900"></div>
            </div>
            <span
              className={`
              ml-3 text-white font-semibold text-lg transition-opacity duration-300
              ${
                sidebarOpen
                  ? "opacity-100"
                  : "opacity-0 lg:opacity-0 lg:group-hover:opacity-100"
              }
              lg:hidden lg:group-hover:block
            `}
            >
              Platform
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-2 py-4 group">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`
                  group/item flex w-full items-center rounded-lg p-3 text-sm font-medium transition-all duration-200
                  ${
                    item.active
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }
                  ${
                    sidebarOpen
                      ? "justify-start"
                      : "justify-center lg:justify-start"
                  }
                `}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span
                  className={`
                  ml-3 transition-all duration-300 whitespace-nowrap
                  ${
                    sidebarOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 lg:opacity-0 lg:-translate-x-2"
                  }
                  lg:group-hover:opacity-100 lg:group-hover:translate-x-0
                `}
                >
                  {item.label}
                </span>

                {/* Tooltip for collapsed state on desktop */}
                <div
                  className={`
                  absolute left-16 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap
                  opacity-0 pointer-events-none transition-opacity duration-200 z-50
                  group-hover/item:opacity-100 group-hover/item:pointer-events-auto
                  ${
                    sidebarOpen
                      ? "lg:hidden"
                      : "hidden lg:block lg:group-hover:hidden"
                  }
                `}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;