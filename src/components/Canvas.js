import React, { useState, useEffect } from "react";

export default function Canvas() {


  function draw1() {
    const canvas = document.getElementById("canvas1");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");    
      
      // for (let y = 10; y < 100; y += 10) {
      //   ctx.moveTo(10, y);
      //   ctx.lineTo(90, y);
      // }
      // let cx = document.querySelector("canvas").getContext("2d");
      ctx.beginPath();
      ctx.moveTo(50, 10);
      ctx.lineTo(10, 70);
      ctx.lineTo(90, 70);
      ctx.fill();

      // ctx.lineTo(50, 10);
      ctx.stroke();
    }
  }

  function draw2() {
    const canvas = document.getElementById("canvas2");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");

      ctx.strokeStyle = "red";
      ctx.lineWidth = 100;
      ctx.beginPath();
      // ctx.moveTo(37.42109, 122.08718);
      ctx.moveTo(50, 10);
      // ctx.lineTo(37.62054, 122.08911);
      // ctx.lineTo(37.4238, 122.08731);
      ctx.lineTo(90, 10);
      ctx.stroke();
    }
  }



  useEffect(() => {
    draw1();
    draw2();
  }, []);



  return (
    <>
      <canvas id="canvas1" width="150" height="150"></canvas>
      <canvas id="canvas2" width="150" height="150"></canvas>
    </>
  );
}
