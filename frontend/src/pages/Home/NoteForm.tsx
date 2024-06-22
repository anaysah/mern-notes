import { PlusIcon } from "lucide-react"

const NoteForm = () => {
    return (
        <div className="relative text-sec bg-back rounded p-4">
            <div className="flex flex-col items-start">
                <div className="uppercase font-bold text-sm">Title</div>
                <input type="text" className="bg-back text-lg border-none outline-none" placeholder="Go to Gym at 8:00 AM"/>
            </div>
            <div className="mt-2 flex flex-col items-start">
                <div className="uppercase font-bold text-sm">Content</div>
                <textarea name="" id="" rows="10" className="w-full border border-divider rounded-lg bg-back p-2 outline-none"></textarea>
            </div>
            <div className="mt-2 flex flex-col items-start">
              <div className="uppercase font-bold text-sm">Tags</div>
              <div className="flex justify-center gap-2">
                <input type="text" className="bg-back text-lg border border-divider outline-none rounded-lg p-1 text-sm" placeholder="Add Tag"/>
                <button className="bg-blue-500 text-white rounded-lg p-1"><PlusIcon className="w-5 h-5"/></button>
              </div>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
    )
}

export default NoteForm