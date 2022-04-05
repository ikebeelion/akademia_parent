import Api from "./Api"

export default{
        getAcademicPeriod(branchid){
            return Api.get('/period/'+branchid)
        },
        getExamTable(id1, id2){
            return Api.get('/examtimetable/'+id1+'/'+id2)
        },
        getClassTable(id1, id2){
            return Api.get('/classtimetable/'+id1+'/'+id2)
        },
        getProfile(id){
            return Api.get('/get-profile/'+id)
        },
        getSingleroomgroup(id){
            return Api.get('/singleroomgroup/'+id)
        },
}