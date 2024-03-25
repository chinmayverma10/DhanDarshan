import React from 'react'


function navbar() {
  return (
    <nav class="bg-gray-800 py-4">
    <div class="container mx-auto flex items-center justify-between px-4">
        <div>
            <span class="text-white text-lg font-semibold pr-8">Your Logo</span>
        </div>

      
        <ul class="flex items-center space-x-8">
            <li><a href="#" class="text-white hover:text-gray-300 text-lg">Home</a></li>
            <li><a href="#" class="text-white hover:text-gray-300 text-lg">Portfolio</a></li>
            <li><a href="#" class="text-white hover:text-gray-300 text-lg">News</a></li>
        </ul>

        
        <button class="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded border border-gray-600 hover:border-gray-700">Logout</button>
    </div>
</nav>
  )
}

export default navbar