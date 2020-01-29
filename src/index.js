import { AlertService } from "./app/alert.service";
import "./main.css";
import { ComponentService } from "./app/component.service";
import { run } from "./app/app";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
