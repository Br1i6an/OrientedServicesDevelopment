"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionDb_1 = __importDefault(require("../../settings/connections/connectionDb"));
class Update_Semester_DAO {
    static updateSemesters(sqlUpdateNow, parameters, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectionDb_1.default.task((consult) => __awaiter(this, void 0, void 0, function* () {
                return yield consult.result(sqlUpdateNow, parameters);
            }))
                .then((responses) => {
                console.log(responses);
                res.status(200).json({ msg: "Semester Updated" });
            })
                .catch((miError) => {
                console.log(miError);
                res.status(400).json({ msg: "Error Updating Semester" });
            });
        });
    }
}
exports.default = Update_Semester_DAO;
