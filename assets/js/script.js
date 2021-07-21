let time = moment();
let currentTime = time.hours();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$("#currentTime").text(moment().format("h:mm a"));

let nine = $("#9");
let ten = $("#10");
let eleven = $("#11");
let twelve = $("#12");
let thrtn = $("#13");
let fourteen = $("#14");
let fifteen = $("#15");
let sixteen = $("#16");
let seventeen = $("#17");
let eightteen = $("#18");

const saveBtn = $(".saveBtn");
const resetBtn = $(".resetBtn");
let txtDel = $("#txtDel");


function pPF(){
    $(".time-block").each(function(){
        let cH = parseInt($(this)[0].id);

        if (cH < currentTime){
            $(this).addClass("past");
        } 
        else if (cH === currentTime){
            $(this).addClass("pres");
        }
        else{
            $(this).addClass("future");
        }
    })
}


function schedule(){
    $(".time-block").each(function(){
        let timeI = $(this).attr("id");
        let schedule = localStorage.getItem(timeI);
        if (schedule !== null){
            $(this).children(".schedule").val(schedule);
        }
    })
}


resetBtn.on("click", function(){
    localStorage.clear();
    location.reload();
    return;
})



saveBtn.on("click", function(){
    let time = $(this).parent().attr("id");
    let schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
})



schedule();
pPF();
