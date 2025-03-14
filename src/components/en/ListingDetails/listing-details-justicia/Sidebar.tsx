import ScheduleForm from "../listing-details-sidebar.tsx/ScheduleForm"
import SidebarInfo from "../listing-details-sidebar.tsx/SidebarInfo"

const Sidebar = () => {
   return (
      <div className="col-xl-4 col-lg-8 me-auto ms-auto">
         <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
            <div className="agent-info bg-white border-20 p-30 mb-40">
               <SidebarInfo />
            </div>
            <div className="tour-schedule bg-white border-20 p-30 mb-40">
               <h5 className="mb-40">I'm looking for something similar...</h5>
               <ScheduleForm />
            </div>
         </div>
      </div>
   )
}

export default Sidebar
