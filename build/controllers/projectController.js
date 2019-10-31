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
const connectMySQL_1 = __importDefault(require("../connectMySQL"));
class ProjectController {
    /*========================================================================*/
    /*-------- My3PLUS --------*/
    getAllUserLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectMySQL_1.default.query("select * from stplusc1_myapp.user_login", function (err, row) {
                var listuser = JSON.parse(JSON.stringify(row, null, 4));
                res.json(listuser);
            });
        });
    }
    getUserLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = req.params;
                const { pass } = req.params;
                yield connectMySQL_1.default.query("SELECT * FROM stplusc1_myapp.user_login WHERE username = '" +
                    [user] +
                    "' and password = '" +
                    [pass] +
                    "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserLoginByEmpId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { empId } = req.params;
                yield connectMySQL_1.default.query("SELECT * FROM stplusc1_myapp.user_login WHERE PRS_NO = '" +
                    [empId] +
                    "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserLoginByUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                yield connectMySQL_1.default.query("select * from stplusc1_myapp.user_login where username = '" + [name] + "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
                //console.log(result);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUserLoginByRole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { role } = req.params;
                yield connectMySQL_1.default.query("SELECT * FROM stplusc1_myapp.user_login WHERE role = " + [role], function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getEmpIdByUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = req.params;
                yield connectMySQL_1.default.query("select PRS_NO from stplusc1_myapp.user_login where username = '" + [user] + "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
                //console.log(result);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectMySQL_1.default.query("select * from stplusc1_myapp.projects", function (err, row) {
                var listproject = JSON.parse(JSON.stringify(row, null, 4));
                console.log(listproject);
                res.json(listproject);
            });
        });
    }
    getProjectsId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectMySQL_1.default.query("SELECT * FROM stplusc1_myapp.projects WHERE ProjId = '" + [id] + "'", function (err, row) {
                    console.log(row);
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ceateProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectMySQL_1.default.query("INSERT INTO stplusc1_myapp.projects set ?", [req.body]);
                console.log(result);
                res.json({ message: "Create Project Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    ceateProjectsAssign(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectMySQL_1.default.query("INSERT INTO stplusc1_myapp.projassign set ?", [req.body]);
                console.log(result);
                res.json({
                    message: "Assign Employee to Project Success = " + [req.body]
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    createUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectMySQL_1.default.query("INSERT INTO stplusc1_myapp.user_login set ?", [req.body]);
                console.log(result);
                res.json({ message: "Create user success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    addTimeAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield connectMySQL_1.default.query("INSERT INTO stplusc1_myapp.tma set ?", [
                    req.body
                ]);
                console.log(result);
                res.json({ message: "Time Attendance Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTMA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connectMySQL_1.default.query("select * from stplusc1_myapp.tma", function (err, row) {
                var listproject = JSON.parse(JSON.stringify(row, null, 4));
                console.log(listproject);
                res.json(listproject);
            });
        });
    }
    getTimeByEmpId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectMySQL_1.default.query("select * from stplusc1_myapp.tma WHERE empId = '" + [id] + "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTimeByProjId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectMySQL_1.default.query("select * from stplusc1_myapp.tma WHERE ProjId = '" + [id] + "'", function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteUserWebById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield connectMySQL_1.default.query("delete from stplusc1_myapp.user_login where Id =" + [id], function (err, row) {
                    var listproject = JSON.parse(JSON.stringify(row, null, 4));
                    console.log(listproject);
                    res.json(listproject);
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield connectMySQL_1.default.query("UPDATE stplusc1_myapp.projects set ? ", [req.body] + "WHERE ProjId = ?" + [id]);
                console.log(result);
                res.json({ message: "update Project Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    updateUserWeb(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const result = yield connectMySQL_1.default.query("UPDATE stplusc1_myapp.user_login set ? ", [req.body] + "WHERE PRS_NO = ?" + [id]);
                console.log(result);
                res.json({ message: "update Project Success = " + [req.body] });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
const projectController = new ProjectController();
exports.default = projectController;
