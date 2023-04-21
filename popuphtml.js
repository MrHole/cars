/*
<a href="#myPopupDialog" data-rel="popup" data-position-to="origin" id="myInformationButtonBox" class="ui-btn  ui-shadow">
<span id="myInformationText"> Simulation of smart robotic vehicle
</span>
</a>
<span >




      




      <label>
              <input id="myCheck3" type="checkbox">
              <span class="myButtonTextSpan">
                Gimbal 1.
              </span>
          </input>
         </label>

      <label>
              <input id="myCheck4" type="checkbox">
              <span class="myButtonTextSpan">
                  Gimbal 2.
              </span>
          </input>
         </label>

      


        <span id="mySliderTitle">Gimbal spin rate:</span> <br>
         <input type="text" data-type="range" id="mySliderbs" value="0" min="0" max="1" step = ".01"></input>

     <span class="myButtonTextSpan"> Time</span>
     <p id="demo">xxx</p>


     <div id="myMainButtonBox" >
         <span style="display: inline-block"><button id="myStartButton"><span class="myButtonTextSpan"> Start </span></button>  	</span>
         <span style="display: inline-block"><button id="myPauseButton"><span class="myButtonTextSpan"> Pause </span></button>  	</span>
         <span style="display: inline-block"><button id="myResetButton"><span class="myButtonTextSpan"> Reset </span></button>   </span>
     </div>


  </span>
<div data-role="popup" id="myPopupDialog">
<div id="myPopupBox">

     <p>
         <h3>Instructions</h3>
        Turn on the waves by clicking the box in the top right corner to start the analysis. There you may also adjust the period of the waves. The camera angle can be changed by clicking and dragging the screen. Zooming in and out is also possible. 
        <h3>Explanation</h3>
        This is a simplified simulation of the Gyroscopic Wave Energy Converter (GWEC) in action. A right-handed Cartesian coordinate system is placed at the center of the GWEC. The waves cause the buoy to oscillate about the first axis. With the help of a motor, the disks are rotating in opposite directions about the third axis. As a result of this, a moment is generated about the second axis, causing the gimbals to rotate. This torque is then transmitted to the generators via a gear drive to generate power.  
        <h3>Abstract</h3>
        This paper presents the Moving Frame Method (MFM) for the analysis of rigid multi-bodies, in the context of an international collaborative senior design project between two engineering schools: Cooper Union in New York City and The Western Norway University of Applied Sciences, in Bergen, Norway. Students at the Western Norway University of Applied Sciences analyzed the smart-vehicle as a multi-body dynamics problem.  They modeled the gyroscopic lift effect using the foundational theory of the MFM. They accounted for the mass of the two inertial disks, the tower that fixed them in place and the mass of the car. This paper presents the underlying theory of how the MFM uses SE(3) to model the problem of gyroscopic lift.  This paper presents the theory in a tutorial style as applied to a multi-body dynamics problem (but as an extension of a single body problem). It will highlight the redundant notation (in comparison to this companion, Part 1, paper).  It will discuss how the MFM supplements the Principle of Virtual Work with an appropriate restriction on the variation of the angular velocity.  It will discuss how the students implemented a proper numerical integration scheme based on the Cayley Hamilton theory and the associated Rodriquez formula. It discusses the fundamental notation, the pedagogical delivery, voiced PowerPoints that deliver the mathematical foundation of the MFM.  In presents a discussion on swipe-learning, to compensate for the density of textbooks. Then, it discusses the challenges faced as this team, modeling the problem as two single bodies, conducted the design, manufacture, assembly, analysis and visualization of the problem. The paper reports on student learning.
        <br>
        <br>
        Keywords: Dynamics, Team Building, Design
        <br>
        <br>

    </p>

    <p>	
        <a href="mailto:joakim_f_n@hotmail.com">Joakim Nyland (Advisor)</a> <br>
        <a href="mailto:haakon.korsvik@gmail.com">Håkon Bakke Korsvik</a> <br>
        <a href="mailto:even.rognsvag@gmail.com">Even Sebastian Rognsvåg</a><br>
        <a href="mailto:toreht@gmail.com">Tore Haram Tomren</a><br>
    </p>
</div>
</div>
*/