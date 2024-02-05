import { useState } from "react";
import {
  Dialog,
} from "@material-tailwind/react";
import './member.css'

const Member = () => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);


    return (  

<div className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead className="text-white">

{/* 01 */}
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Id</th>
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left lg:h-0 h-[4.2rem]">Image</th>
					<th className="p-3 text-left lg:pl-40">Position</th>
					<th className="p-3 text-left w-10 h-10"></th>
				</tr>      
{/* 02 */}
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Id</th>
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left lg:h-0 h-[4.2rem]">Image</th>
					<th className="p-3 text-left lg:pl-40">Position</th>
					<th className="p-3 text-left w-10 h-10"></th>
				</tr>   

{/* 03 */}
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Id</th>
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left lg:h-0 h-[4.2rem]">Image</th>
					<th className="p-3 text-left lg:pl-40">Position</th>
					<th className="p-3 text-left w-10 h-10"></th>
				</tr> 

			</thead>




		<tbody className="flex-1 sm:flex-none">
      {/* 01 jahid */}
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="w-40 ml-10 lg:ml-0 p-3">2022001</td>
					<td className="lg:w-80 ml-10 lg:ml-0 p-3">Jahidul Islam</td>
          <td className="w-16 p-3 ml-10 lg:ml-0">  <div>
    <img className="rounded-xl h-24 w-20" src="https://i.ibb.co/yNp4zFW/Whats-App-Image-2024-01-12-at-8-51-30-PM.jpg" />
  </div></td>
  <td className="p-3 w-40 lg:pl-40 ml-10 lg:ml-0">সভাপতি</td>

<td>

<button className="btn btn-accent btn-sm btn-outline ml-10 lg:ml-0" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
<dialog id="my_modal_1" className="modal">


  <div className="modal-box">

  <div className="avatar flex justify-center mt-4">
          
          <div className="w-28 rounded-xl">
            <img src="https://i.ibb.co/yNp4zFW/Whats-App-Image-2024-01-12-at-8-51-30-PM.jpg" />
          </div>
          </div>
        
          <div className="mt-10 mb-6">
        
          <div className="flex gap-1 justify-center mt-2">
          <span className="font-bold text-xl">নাম:</span> <div className="italic">মুহা: জাহিদুল ইসলাম</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">পিতার নাম:</span> <div className="italic">মো: মুক্তার আহমাদ</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">মাতার নাম:</span> <div className="italic">মোসা: ছেনোয়ারা বেগম</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">ঠিকানা:</span> <div className="italic">পূর্ব বোমংখিল, গর্জনিয়া, রামু, কক্সবাজার
        </div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">মোবাইল:</span> <div className="italic">০১৮৮১৭৩৯৮৫৫
        </div>
          </div>
          </div>


  </div>
 

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>





</dialog>
</td>



				

						
      
				</tr>
      {/* 02 hamed */}
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="w-40 ml-10 lg:ml-0 p-3">2022002</td>
					<td className="lg:w-80 ml-10 lg:ml-0 p-3">Hamed</td>
          <td className="w-16 p-3 ml-10 lg:ml-0">  <div>
    <img className="rounded-xl h-24 w-20" src="https://i.ibb.co/qMWSZh3/Whats-App-Image-2024-01-12-at-8-51-34-PM.jpg" />
  </div></td>
  <td className="p-3 w-40 lg:pl-40 ml-10 lg:ml-0">সহ-সভাপতি</td>

<td>

<button className="btn btn-accent btn-sm btn-outline ml-10 lg:ml-0" onClick={()=>document.getElementById('my_modal_2').showModal()}>Details</button>
<dialog id="my_modal_2" className="modal">


  <div className="modal-box">

  <div className="avatar flex justify-center mt-4">
          
          <div className="w-28 rounded-xl">
            <img src="https://i.ibb.co/qMWSZh3/Whats-App-Image-2024-01-12-at-8-51-34-PM.jpg" />
          </div>
          </div>
        
          <div className="mt-10 mb-6">
        
          <div className="flex gap-1 justify-center mt-2">
          <span className="font-bold text-xl">নাম:</span> <div className="italic">hamed</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">পিতার নাম:</span> <div className="italic">মো: মুক্তার আহমাদ</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">মাতার নাম:</span> <div className="italic">মোসা: ছেনোয়ারা বেগম</div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">ঠিকানা:</span> <div className="italic">পূর্ব বোমংখিল, গর্জনিয়া, রামু, কক্সবাজার
        </div>
          </div>
          <div className="flex gap-1 justify-center mt-1">
          <span className="font-bold text-xl">মোবাইল:</span> <div className="italic">০১৮৮১৭৩৯৮৫৫
        </div>
          </div>
          </div>


  </div>
 

  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>





</dialog>
</td>



				

						
      
				</tr>


       




        {/* 03 ibrahim */}
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="w-40 ml-10 lg:ml-0 p-3">2022003</td>
					<td className="lg:w-80 ml-10 lg:ml-0 p-3">Ibrahim</td>
          <td className="w-16 p-3 ml-10 lg:ml-0">  <div>
    <img className="rounded-xl" src="" />
  </div></td>
  <td className="p-3 w-40 lg:pl-40 ml-10 lg:ml-0">অর্থ-সম্পাদক</td>
					<td className=" lg:mt-14">
						<button  className="btn btn-accent btn-sm btn-outline ml-10 lg:ml-0">Details</button>

						<Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <div className="avatar flex justify-center mt-4">
  <div className="w-28 rounded-xl">
    <img src="" />
  </div>
  </div>

  <div className="mt-10 mb-6">

  <div className="flex gap-1 justify-center mt-2">
  <span className="font-bold text-xl">নাম:</span> <div className="italic">মুহা: জাহিদুল ইসলাম</div>
  </div>
  <div className="flex gap-1 justify-center mt-1">
  <span className="font-bold text-xl">পিতার নাম:</span> <div className="italic">মো: মুক্তার আহমাদ</div>
  </div>
  <div className="flex gap-1 justify-center mt-1">
  <span className="font-bold text-xl">মাতার নাম:</span> <div className="italic">মোসা: ছেনোয়ারা বেগম</div>
  </div>
  <div className="flex gap-1 justify-center mt-1">
  <span className="font-bold text-xl">ঠিকানা:</span> <div className="italic">পূর্ব বোমংখিল, গর্জনিয়া, রামু, কক্সবাজার
</div>
  </div>
  <div className="flex gap-1 justify-center mt-1">
  <span className="font-bold text-xl">মোবাইল:</span> <div className="italic">০১৮৮১৭৩৯৮৫৫
</div>
  </div>


  </div>
       
        
      </Dialog>
					</td>
				</tr>


               
			</tbody>
		</table>
	</div>
</div>
    );
};

export default Member;