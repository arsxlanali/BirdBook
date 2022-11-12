import axios from "axios";
// import { toast } from "react-toastify";
// import { clearEmployee } from './redux/Slice/employeesSlice';
// import { clearProjects } from './redux/Slice/projectSlice';
// import { clearLogin } from './redux/Slice/loginSlice';
// import { clearTimeSheet } from './redux/Slice/viewTimeSheetSlice';

const NetworkService = {
  setupInterceptorsRequest: () => {
    axios.interceptors.request.use((request) => {
      request.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;
      return request;
    });
  },
};

export default NetworkService;
