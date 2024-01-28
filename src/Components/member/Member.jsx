import { useState } from "react";
import {
  Dialog,
} from "@material-tailwind/react";
import './member.css'

const Member = () => {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);


    return (
//         <div>
//             <div className="overflow-x-auto lg:relative left-12 w-11/12 mx-auto">
//   <table className="table mx-auto">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>আইডি</th>
//         <th>ছবি</th>
//         <th>নাম</th>
//         <th>পদবি</th>
        
//       </tr>
//     </thead>
//     <tbody>

//         {/* row  */}
//       <tr>
//        <td>২০২২০০১</td>
//         <td>
//           <div className="flex items-center">
//           <div className="avatar">

// </div>
            
             
              
            
//           </div>
//         </td>
//         <td>
//         <div className="font-bold">Jahidul Islam</div>
//         </td>
//         <td>সভাপতি</td>
        
//         <th>
//           <button onClick={handleOpen} className="btn btn-neutral btn-xs">Details</button>
          
      
//         </th>
//       </tr>



//       {/* row  */}
//       <tr>
//        <td>২০২২০০২</td>
//         <td>
//           <div className="flex items-center">
//           <div className="avatar">
//   <div className="w-16 mask mask-squircle">
//     <img src="https://i.ibb.co/qMWSZh3/Whats-App-Image-2024-01-12-at-8-51-34-PM.jpg" />
//   </div>
// </div>
            
                     
            
//           </div>
//         </td>
//         <td>
//         <div className="font-bold">Abu Hamed</div>
//         </td>
//         <td>সহ-সভাপতি</td>
        
//         <th>
//           <button className="btn btn-neutral btn-xs">Details</button>
//         </th>
//       </tr>


//       {/* row  */}
//       <tr>
//        <td>২০২২০০৩</td>
//         <td>
//           <div className="flex items-center">
//           <div className="avatar">
//   <div className="w-16 mask mask-squircle">
//     <img src="https://i.ibb.co/KVjnR2y/Whats-App-Image-2024-01-12-at-8-48-21-PM.jpg" />
//   </div>
// </div>
                         
            
//           </div>
//         </td>
//         <td>
//         <div className="font-bold">Ibrahim</div>
//         </td>
//         <td>অর্থ-সম্পাদক</td>
       
//         <th>
//           <button className="btn btn-neutral btn-xs">Details</button>
//         </th>
//       </tr>

//       {/* row  */}
//       <tr>
//        <td>২০২২০০৪</td>
//         <td>
//           <div className="flex items-center">
//           <div className="avatar">
//   <div className="w-16 mask mask-squircle">
//     <img src="https://i.ibb.co/Bj6pv5F/Whats-App-Image-2024-01-12-at-8-51-35-PM.jpg" />
//   </div>
// </div>
            
                     
            
//           </div>
//         </td>
//         <td>
//         <div className="font-bold">Abdullah</div>
//         </td>
//         <td>সহ-অর্থ-সম্পাদক</td>
        
//         <th>
//           <button className="btn btn-neutral btn-xs">Details</button>
//         </th>
//       </tr>
      
//     </tbody>
//   </table>
// </div>
//         </div>

<div className="flex items-center justify-center">
	<div className="container">
		<table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead className="text-white">
				<tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th className="p-3 text-left">Id</th>
					<th className="p-3 text-left">Name</th>
					<th className="p-3 text-left lg:h-0 h-[4.2rem]">Image</th>
					<th className="p-3 text-left lg:pl-40">Position</th>
					<th className="p-3 text-left w-10 h-10"></th>
					
				</tr>      
                
			</thead>


			<tbody className="flex-1 sm:flex-none">
				<tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td className="w-40 ml-10 lg:ml-0 p-3">2022001</td>
					<td className="lg:w-80 ml-10 lg:ml-0 p-3">Jahidul Islam</td>
          <td className="w-16 p-3 ml-10 lg:ml-0">  <div>
    <img className="rounded-xl" src="https://i.ibb.co/yNp4zFW/Whats-App-Image-2024-01-12-at-8-51-30-PM.jpg" />
  </div></td>
  <td className="p-3 w-40 lg:pl-40 ml-10 lg:ml-0">sovapoti</td>
					<td className=" lg:mt-14">
						<button onClick={handleOpen} className="btn btn-accent btn-sm btn-outline ml-10 lg:ml-0">Details</button>

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