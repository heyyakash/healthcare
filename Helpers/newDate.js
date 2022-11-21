export const newDate = (dateString)=>{
    if(dateString){
        return ((new Date(dateString).getDate()).toString() + '/' +(new Date(dateString).getMonth()+1).toString() + '/' + (new Date(dateString).getFullYear()).toString())
    }
    return ((new Date().getDate()).toString() + '/' +(new Date().getMonth()+1).toString() + '/' + (new Date().getFullYear()).toString()) 
}