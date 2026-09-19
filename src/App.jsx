import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/main_header/Header";
import Home from "./pages/home/Home";
import AboutCompany from "./pages/about_company/AboutCompany";
import Locations from "./pages/locations/Locations";
import Testimonials from "./pages/testimonials/Testimonials";
import MissionVision from "./pages/mission_vision/MissionVision";
import DevelopmentProcess from "./pages/development_process/DevelopmentProcess";
import ContactUs from "./pages/contact_us/ContactUs";
import Footer from "./components/footer/Footer";
import WebsiteDevelopment from "./pages/website _development/WebsiteDevelopment";
import UIUXDesign from "./pages/ui_ux_design/UIUXDesign";
import BrandReputation from "./pages/brand_reputation_management/BrandReputation";
import SoftwareDevelopment from "./pages/software_development/SoftwareDevelopment";
import ApplicationDevelopment from "./pages/application_development/ApplicationDevelopment";
import EnterpriseSoftware from "./pages/enterprise_software_development/EnterpriseSoftware";
import CustomerSoftware from "./pages/customer_software_development/CustomerSoftware";
import Healthcare from "./pages/healthcare/Healthcare";
import Blogs from "./pages/blogs/Blogs";
import Crm from "./pages/crm/Crm";
import Qms from "./pages/qms/qms";
import DocumentManagement from "./pages/document_management/DocumentManagement";
import Hrms from "./pages/hrms/Hrms";
import ProjectManagement from "./pages/project_management/ProjectManagement";
import EcommerceSolutions from "./pages/E_commerce_solutions/EcommerceSolutions";
import OperationManagement from "./pages/operation_management/OperationManagement";
import WebPortal from "./pages/web_portal/WebPortal";
import Careers from "./pages/careers/Careers";
import Insights from "./pages/Insights/Insights";
import SupplyChain from "./pages/supply_chain/SupplyChain";
import Cms from "./pages/cms/Cms";
import Erp from "./pages/erp/Erp";
import LifeAtVed from "./pages/life_at_ved/LifeAtVed";
import Construction from "./pages/construction/Construction";
import Insurance from "./pages/insurance/Insurance";
import TravelHospitality from "./pages/travel_hospitality/TravelHospitality";
import Ecommerce from "./pages/ecommerce/Ecommerce";
import Manufacturing from "./pages/manufacturing/Manufacturing";
import OilGas from "./pages/oil_gas/OilGas";
import TransportationLogistic from "./pages/transportation_logistic/TransportationLogistic";
import SmoothScroll from "./components/SmoothScroll";
import CostCalculator from "./pages/cost_calculator/CostCalculator";
import SupportMaintenance from "./pages/support_and_maintenance/SupportMaintenance";
import GxPSoftware from "./pages/gxp_software/GxPSoftware";
import { Blogspage } from "./pages/blogs/Blogspage";
import SiteMap from "./pages/site_map/SiteMap";
import BlogDetails from "./pages/blog_details/BlogDetails";
import SchoolCollege from "./pages/school_college/SchoolCollege";
import SchoolUniversity from "./pages/school_university/SchoolUniversity";
import CloudServices from "./pages/cloud_services/CloudServices";
import Seo from "./pages/seo/Seo";
import DigitalMarketing from "./pages/digital_marketing/DigitalMarketing";
import AIML from "./pages/ai_ml/AI-ML";
import MVPConsulting from "./pages/mvp_consulting/MVPConsulting";
import QaTesting from "./pages/qa_testing/QaTesting";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from "./pages/news_events/Events";
import CyberSecurity from "./pages/cyber_security/cyberSecurity";
import DataScience from "./pages/data_science/data_science";
import Oil from "./pages/oil_and_lubrication/Oil";
import Excel from "./pages/excel/Excel";
import Pharma from "./pages/pharma/Pharma";
import InventoryManagement from "./pages/inventory_management/InventoryManagement";
import ChatWidget from "./Chatbot_Component/ChatWidget";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <>
    <BrowserRouter>
      <SmoothScroll>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development-cost-calculator" element={<CostCalculator />} />
          <Route path="/AboutCompany" element={<AboutCompany />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/MissionVision" element={<MissionVision />} />
          <Route path="/DevelopmentProcess" element={<DevelopmentProcess />} />
          <Route path="/Events" element={<Events />} />
     
          
          <Route path="/WebsiteDevelopment" element={<WebsiteDevelopment />} />
          <Route path="/UIUXDesign" element={<UIUXDesign />} />
          <Route path="/BrandReputation" element={<BrandReputation />} />
          <Route path="/CustomizePharmaSoftware" element={<GxPSoftware />} />
          <Route
            path="/SoftwareDevelopment"
            element={<SoftwareDevelopment />}
          />

          <Route
            path="/ApplicationDevelopment"
            element={<ApplicationDevelopment />}
          />
          <Route path="/EnterpriseSoftware" element={<EnterpriseSoftware />} />
          <Route path="/CustomSoftware" element={<CustomerSoftware />} />
          <Route path="/SupportMaintenance" element={<SupportMaintenance />} />

          <Route path="/CloudServices" element={<CloudServices />} />

          <Route
            path="/Seo"
            element={<Seo />}
          />

          <Route
            path="/DigitalMarketing"
            element={<DigitalMarketing />}
          />
          <Route path="/AI-ML" element={<AIML />} />
          <Route path="/MVPConsulting" element={<MVPConsulting />} />
          <Route path="/QaTesting" element={<QaTesting />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/DataAnalytics" element={<DataScience />} />

          <Route path="/Crm" element={<Crm />} />
          <Route path="/Qms" element={<Qms />} />
          <Route path="/Hrms" element={<Hrms />} />
          <Route path="/DocumentManagement" element={<DocumentManagement />} />
          <Route path="/ProjectManagement" element={<ProjectManagement />} />
          <Route path="/EcommerceSolutions" element={<EcommerceSolutions />} />
          <Route path="/SchoolCollege" element={<SchoolCollege />} />
          <Route path="/SchoolUniversity" element={<SchoolUniversity />} />
          <Route
            path="/OperationManagement"
            element={<OperationManagement />}
          />
          <Route path="/WebPortal" element={<WebPortal />} />
          <Route path="/SupplyChain" element={<SupplyChain />} />
          <Route path="/hms" element={<Cms />} />
          <Route path="/Erp" element={<Erp />} />

          <Route path="/Healthcare" element={<Healthcare />} />
          <Route path="/pharma" element={<Pharma />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path="/TravelHospitality" element={<TravelHospitality />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/OilGas" element={<OilGas />} />
          <Route path="/oil_and_lubrication" element={<Oil />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route
            path="/TransportationLogistic"
            element={<TransportationLogistic />}
          />
          <Route path="/SiteMap" element={<SiteMap />} />
          <Route path="/BlogDetails/:id" element={<BlogDetails />} />

          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="Blogspage" element={<Blogspage />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Insights" element={<Insights />} />
          <Route path="/training-and-internship" element={<LifeAtVed />} />

          <Route path="/*" element={<Navigate to="/" />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
    <div className="fixed bottom-6 right-6 z-99999">
        <ChatWidget/>
    </div>
    </>
  );
}

export default App;
