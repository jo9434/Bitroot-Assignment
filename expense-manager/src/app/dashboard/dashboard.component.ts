import { Component, OnInit } from '@angular/core';
import jsPDF from "jspdf";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $("#addincome").on("click",function(){
      if($("#datainccol").length) {
        console.log("tr is present with id as datainccol.");
        let i = "1";
        let inc_date = $("#inc_date").val(), inc_amt = $("#inc_amount").val(), inc_cat = $("#inc_category").val();
        $("#incomeid").html(""+i);
        $("#incomedate").html(""+inc_date);
        $("#incomeamt").html(""+inc_amt);
        $("#incomecat").html(""+inc_cat);
        i=i+1;
      } else {
        console.log("tr is not present with id as datainccol, so creating new element tr.");
        let tr = document.createElement("tr");
        tr.id = "datainccol";
        tr.innerHTML = `
          <td id="incomeid"></td>
          <td id="incomedate"></td>
          <td id="incomeamt"></td>
          <td id="incomecat"></td>
        `;
        document.querySelector('.tableIncomes')?.appendChild(tr);
        let i = "1";
        let inc_date = $("#inc_date").val(), inc_amt = $("#inc_amount").val(), inc_cat = $("#inc_category").val();
        $("#incomeid").html(""+i);
        $("#incomedate").html(""+inc_date);
        $("#incomeamt").html(""+inc_amt);
        $("#incomecat").html(""+inc_cat);
        i+=1;
      }
    })

    $("#addexpense").on("click",function(){
      if($("#dataexpcol").length) {
        console.log("tr is present with id as dataexpcol.");
        let i = "1";
        let exp_date = $("#exp_date").val(), exp_amount = $("#exp_amount").val(), exp_category = $("#exp_category").val();
        $("#expenseid").html(""+i);
        $("#expensedate").html(""+exp_date);
        $("#expenseval").html(""+exp_amount);
        $("#expensecat").html(""+exp_category);
        i+=1;
      } else {
        console.log("tr is not present with id as dataexpcol, so creating new element tr.");
        let tr = document.createElement("tr");
        tr.id = "dataexpcol";
        tr.innerHTML = `
          <td id="expenseid"></td>
          <td id="expensedate"></td>
          <td id="expenseamt"></td>
          <td id="expensecat"></td>
        `;
        document.querySelector('.tableExpenses')?.appendChild(tr);
        let i = "1";
        let exp_date = $("#exp_date").val(), exp_amount = $("#exp_amount").val(), exp_category = $("#exp_category").val();
        $("#expenseid").html(""+i);
        $("#expensedate").html(""+exp_date);
        $("#expenseamt").html(""+exp_amount);
        $("#expensecat").html(""+exp_category);
        i+=1;
      }
    })

    $("#exceldwld").on("mouseenter",function(){
      $("#exceltext").css("display","block");
    })

    $("#exceldwld").on("mouseleave",function(){
      $("#exceltext").css("display","none");
    })

    $("#pdfdwld").on("mouseenter",function(){
      $("#pdftext").css("display","block");
    })

    $("#pdfdwld").on("mouseleave",function(){
      $("#pdftext").css("display","none");
    })

  }

  users:string[] = ["joel","rajesh","simon","manasi arora","r.k singh"];

  // Nav Path Property Binding to Respective Components for Routing Component
  pathLogin:string = "/login"; // Login Component

  addIncomeData() {
    $
  }

  addExpenseData() {
    $
  }

  displayExcelText() {
    $
  }

  hideExcelText() {
    $
  }

  displayPdfText() {
    $
  }

  hidePdfText() {
    $
  }

}
