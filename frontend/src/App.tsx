import './App.css'
import { Button } from './components/Button'
import Card from './components/Card'
import { PlusIcon, ShareIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePage='videos' />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header with Buttons */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Notes</h1>
          <div className="flex space-x-4">
            <Button 
              variant='secondary' 
              text='Share Brain' 
              size='md' 
              startIcon={<ShareIcon className='h-5 w-5' />} 
            />
            <Button 
              variant='primary' 
              text='Add Content' 
              startIcon={<PlusIcon className='h-5 w-5' />} 
              size='md' 
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="YouTube Video"
          type="youtube"
          link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          tags={["#video", "#learning"]}
          date="10/03/2024"
          icon={<DocumentTextIcon className="h-5 w-5" />}
        />

        <Card 
          title="Tweet Example"
          type="tweet"
          link="https://twitter.com/jack/status/20"
          tags={["#twitter", "#news"]}
          date="10/03/2024"
          icon={<DocumentTextIcon className="h-5 w-5" />}
        />

        <Card 
          title="Google Drive Link"
          type="drive"
          link="https://drive.google.com/file/d/EXAMPLE_ID/view"
          tags={["#drive", "#documents"]}
          date="10/03/2024"
          icon={<DocumentTextIcon className="h-5 w-5" />}
        />

        </div>
      </div>
    </div>
  )
}

export default App
