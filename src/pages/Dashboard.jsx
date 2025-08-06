import  {DashboardLayout}  from '../layout'
import { LayoutDashboard } from 'lucide-react'

 function Dashboard() {

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </div>

        {/* Page title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Platform Dashboard</h1>

        {/* Main content area */}
        <div className="space-y-6">
          {/* Large content area */}
          <div className="bg-white rounded-lg border border-gray-200 h-80 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <LayoutDashboard className="h-8 w-8 text-gray-400" />
              </div>
              <p className="text-lg font-medium">Main Content Area</p>
              <p className="text-sm">Add your dashboard widgets here</p>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  )
}
export default Dashboard
