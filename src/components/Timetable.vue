<template>
    <div>
    <h1>View Time Table</h1>
    <section>
    <center>
    <div class="form-group">
        <label for="">Ward</label>
        <select class="form-control" v-model="getTable.ward" @change="getClassInfo">
            <option value="">--</option>
            <option v-for="ward in wards" :value="{wardid:ward[0].studentuseraccountid, classid:ward[0].classid, yearid:ward[0].yearid}" :key="ward[0].studentuseraccountid">
                {{ ward[0].firstname }} {{ ward[0].lastname }}
            </option>
        </select>
    </div> <br>
        <div class="form-group">
            <label for="">Academic Period</label>
            <select v-model="getTable.period" class="form-control">
                <option value="null">select</option>
                <option v-for="period in academicPeriods" :key="period.id" :value="period.id">
                     {{ period.session.session }} - {{ period.term.term }}
                </option>
            </select>
        </div><br/>
            <div class="form-group">
            <label class="form-label">Time Table Type</label>
            <select  v-model="getTable.type" class="form-control" @change="emptyTable()">
                <option value="null">select</option>
                <option  value="class_timetable">Class Timetable</option>
                <option value="exam_timetable">Exam Timetable</option>
            </select>
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click="getTimeTable()">
                See timetable
            </button>
        </div>
    </center>
    </section>
    <section>
        <div class="row" v-if="this.timetable != null">
                                        <div class="col-12 mt-3">
                                        <h1 v-if="getTable.type == 'class_timetable' ">
                                            Class Time Table For {{ allrooms.classgroupname  }} {{ allrooms.classroom}}
                                        </h1>
                                        <h1 v-else>Exam Time Table</h1>
                                        <div class="row">
                                            <div class="col-4">
                                                <center><h5>Monday</h5></center>
                                                <div >
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Subject</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="table in timetable" :key='table.id'>
                                                                <td v-if="table.day == 'monday'">{{table.subjecttitle}}</td>
                                                                <td v-if="table.day == 'monday'">{{table.from}} - {{table.to}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <center><h5>Tuesday</h5></center>
                                                <div >
                                                    <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Subject</th>
                                                            <th>Time</th>
                                                        </tr>
                                                    </thead>
                                                    <thead>
                                                        <tr v-for="table in timetable" :key='table.id'>
                                                            <td v-if="table.day == 'tuesday'">{{table.subjecttitle}}</td>
                                                            <td v-if="table.day == 'tuesday'">{{table.from}} - {{table.to}}</td>
                                                        </tr>
                                                    </thead>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-4">
                                                <center><h5>Wednesday</h5></center>
                                                <div >
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Subject</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="table in timetable" :key='table.id'>
                                                                <td v-if="table.day == 'wednesday'">{{table.subjecttitle}}</td>
                                                                <td v-if="table.day == 'wednesday'">{{table.from}} - {{table.to}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-4">                                                
                                                <center><h5>Thursday</h5></center>
                                                <div>                                                
                                                    <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Subject</th>
                                                            <th>Time</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="table in timetable" :key='table.id'>
                                                            <td v-if="table.day == 'thursday'">{{table.subjecttitle}}</td>
                                                            <td v-if="table.day == 'thursday'">{{table.from}} - {{table.to}}</td>
                                                        </tr>
                                                    </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-4">
                                                <center><h5>Friday</h5></center>
                                                <div >
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Subject</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="table in timetable" :key='table.id'>
                                                                <td v-if="table.day == 'friday'">{{table.subjecttitle}}</td>
                                                                <td v-if="table.day == 'friday'">{{table.from}} - {{table.to}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-4">
                                                <center><h5>Saturday</h5></center>
                                                <div >
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Subject</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="table in timetable" :key='table.id'>
                                                                <td v-if="table.day == 'saturday'">{{table.subjecttitle}}</td>
                                                                <td v-if="table.day == 'saturday'">{{table.from}} - {{table.to}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div class="col-4">
                                                <center><h5>Sunday</h5></center>
                                                <div >
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Subject</th>
                                                                <th>Time</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="table in timetable" :key='table.id'>
                                                                <td v-if="table.day == 'sunday'">{{table.subjecttitle}}</td>
                                                                <td v-if="table.day == 'sunday'">{{table.from}} - {{table.to}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                            
    </section>
    </div>
</template>

<script>
import User from '../apis/User'
import Result from '../apis/Result.js'
import Timetable from '../apis/Timetable'
export default {
    data() {
        return {
                checkFilled:true,
                user:null,
                academicPeriods:null,
                getTable: {
                    type:null,
                    period:null,
                    classgroup:null,
                    classroom:null,
                    ward:null
                },
                profile:null,
                allrooms:null,
                timetable:null,
                mytable:null,
                wards:null
            }
    },

    methods: {
        getAcademicPeriod(){
            Timetable.getAcademicPeriod(this.user.branchid).then((result) => {
                this.academicPeriods = result.data
            })
        },
        getWards(){
            Result.getWards(this.user.id).then((result) => {
                this.wards = result.data
            })
        },
        getClassInfo(){
            this.getTable.classroom = this.getTable.ward.classid
            this.getTable.classgroup = this.getTable.ward.yearid
        },
        emptyTable(){
            this.timetable = null
        },

        getTimeTable(){
            if(this.getTable.type == 'exam_timetable'){
                Timetable.getExamTable(this.getTable.classgroup,this.getTable.period).then((result) => {
                    this.timetable = []
                    this.timetable = result.data
                })
            }else{
                Timetable.getClassTable(this.getTable.classroom, this.getTable.period).then((result) => {
                    this.timetable = []
                    this.timetable = result.data
                })
            }
        },

        getDays(monday, myArray){
            var day =  monday
           for(var i=0; i < myArray.length; i++){
               if(myArray[i]['day'] === day ){
                   console.log(myArray)
               }
           }
        },
        getAuth(){
            User.auth().then((result)=>{
                this.user = result.data                  
                this.getAcademicPeriod()
                this.getProfile()
                this.getWards()
            })
            // .catch(()=>{
			// 	this.$router.push('/')
			// })
        },
        getProfile(){
            Timetable.getProfile(this.user.id).then((result) => {
                this.profile = result.data
                this.getTable.classgroup = result.data['yearid']
                this.getTable.classroom = result.data['classid']
                Timetable.getSingleroomgroup(this.profile.classid).then((result) => {
                this.allrooms = result.data
            });            
            });            
        },
    },
    created(){
      this.getAuth()
    }

}
</script>
<style scoped>
    thead{
        background:rgb(165, 160, 160)
    }
    thead tr th{
        color: black;
    }
</style>