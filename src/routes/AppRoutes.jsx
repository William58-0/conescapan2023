import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../apps/home/pages/HomePage"
import { PaperPage } from "../apps/papers/pages/PaperPage"
import { CalendarPage } from "../apps/calendar/pages/CalendarPage"
import { ConferencePage } from "../apps/conferences/pages/ConferencePage"
import { VisitsPage } from "../apps/visits/pages/VisitsPage"
import { WorkshopPage } from "../apps/workshop/pages/WorkshopPage"


export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/conferences" element={<ConferencePage/>}/>
        <Route path="/papers" element={<PaperPage/>}/>
        <Route path="/technical-visits" element={<VisitsPage/>}/>
        <Route path="/workshops" element={<WorkshopPage/>}/>
        <Route path="/*" element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}

