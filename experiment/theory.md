### Theory

### 1) SCR

**Representation of SCR:**

Fig. 1(a) and 1(b) show the symbolic representation of SCR and a typical SCR package available in market.

<br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<br>
<img src="images/th4.png">
<br><br>
Fig. 1(a). Symbolic representation of SCR.
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<br>
<img src="images/th5.png">
<br><br>
Fig. 1(b). A typical SCR package.
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<br>
<div style="float: left; width:100%;"><br>
  
**Introduction to SCR:**

Fig. 2 shows the internal structure of a SCR. Some of the key features of SCR are compiled and given below.

</div>

<center>
<img src="images/th6.png" height="350px">

<br>
Fig. 2. Internal structure of SCR.
<br>
</center>
<br>

1.	Silicon-controlled rectifier (SCR) is a semiconductor power device. It is used as a controlled switch in power electronic circuits as bistable switches (ON/ OFF State). In utility dc transmission line applications, series-connected SCRs are employed in It finds wide applications in AC-DC rectifiers, Choppers, AC Voltage controllers, Cycloconverters and Inverters.<br>

2.	It has a four layer PNPN structure: Two P-type doped (p) layers, Two N-type doped layers, one is heavy doped (n<sup>+</sup>) and lightly doped (n<sup>-</sup>). It has three junctions: p-n (J<sub>1</sub>), n-p (J<sub>2</sub>) and p-n<sup>+</sup> (J<sub>3</sub>).<br>
3.	The  SCR has three external terminals namely: Anode (A), Cathode (K) and Gate (G). <br><br>

**Operating modes of SCR:**
<br>

1.	Forward Blocking State: When the anode voltage is made more positive with respect to the cathode and the Gate current is zero, the junctions ‘J<sub>1</sub> ‘ and ‘J<sub>3</sub> ‘ are forward biased while ‘J<sub>2</sub> ‘ is reverse biased. Only a small leakage current flows from anode to cathode. The SCR is then said to be in the forward blocking.

2.	Forward Conducting State: If the anode-to-cathode voltage (v<sub>AK</sub>)  is increased to a sufficient value, the reverse-biased junction J<sub>2</sub> breaks down. This is known as avalanche breakdown. All three junctions (J<sub>1</sub>, J<sub>2</sub> and J<sub>3</sub> ) are now forward biased, resulting in flow of current (i<sub>A</sub>). The device is now in conducting state, or ON-state. A minimum anode current known as ‘latching current’ (I<sub>L</sub>) needs to be maintained immediately after the SCR goes to ON- State.
  
3.	Once the SCR starts conducting, gate loses control over the device. It continues conducting even after gate signal is removed. However, if the forward anode current (I<sub>A</sub>) is reduced below a level known as the ‘holding current’ (I<sub>H</sub>), the SCR goes to blocking state. The holding current is less than the latching current.

4.	Reverse Blocking State:  When the cathode voltage is more positive with respect to the anode, the junctions 'J<sub>1</sub>' and 'J<sub>3</sub>' are reverse biased while junction 'J<sub>2</sub> is forward biased. No current flows from anode-to-cathode and hence the SCR is in reverse blocking state or OFF- State.<br><br>



**'v-i' Characteristics of the SCR:**

1.	'v-i' characteristics of a SCR shows the variation between the anode current (i<sub>A</sub>) against the anode-to-cathode voltage (v<sub>AK</sub>).<br><br>
2.	The circuit diagram to plot the characteristics is given in Fig. 3.<br>

<center>
<img src="images/th7.png" height="350px">

<br>
Fig. 3. Circuit to plot v-I characteristics.
<br>
</center>
<br> 

3.	The 'v-i' characteristics of SCR is shown in Fig. 4.

<center>
<img src="images/th8.png" height="350px">

<br>
Fig. 4. v-i  characteristics of SCR.
<br>
</center>
<br> 

4.	SCR has three operating modes: Forward Blocking, Forward Conduction and Reverse Blocking as shown in Fig. 4. 'I<sub>H</sub>' is the holding current and 'I<sub>L</sub>' is the latching current. The Forward breakover voltages 'V<sub>BO1</sub> , V<sub>BO2</sub> and V<sub>BO3</sub>' (V<sub>BO1</sub> <V<sub>BO2</sub> <V<sub>BO3</sub>) correspond to the Gate currents 'I<sub>g1</sub>, I<sub>g2</sub>  and I<sub>g3</sub>'  (I<sub>g1</sub> > I<sub>g2</sub> > I<sub>g3</sub>) respectively.



<div style="float: left; width:100%;"><br>
  
**Circuit Diagram to plot 'v-i' Characteristics**

The v-i characteristics of SCR can be obtained using the circuit diagram given in Fig. 3. AC supply is connected in series with SCR and a resistive load. In order to obtain the v-i characteristics, the Anode-to-Cathode voltage (v<sub>AK</sub>) and Anode current (i<sub>A</sub>) are to be recorded using any one of the following methods:

1.	Using Analog measuring instruments: Voltmeters and Ammeters
2.	Using Digital Storage Oscilloscope

**•	Method-1: Using Analog measuring instruments: Voltmeters and Ammeters**
</div>

<center>
<img src="images/th9.png" height="350px">

<br>
Fig. 5. Circuit Diagram using meters.
<br>
</center>
<br>

Steps for experimentation (Refer Fig. 5): 

  1.	Ammeter to measure the anode current and Voltmeter to measure the anode-to-cathode voltage (v<sub>AK</sub>) are to be connected in series and parallel respectively to the SCR.

  2.	The gate supply circuit consists of a battery in series with the  rheostat and an Ammeter. The rheostat (R<sub>g</sub>) limits the gate current (I<sub>g</sub>) magnitude since only a very small amount of gate current is required to trigger the SCR into ON-state.

  3.	The input supply voltage is increased in steps and the corresponding Voltmeter and Ammeter readings are to be tabulated. The data points indicate the v-i characteristics.<br><br>


**Instruments required for the above method:**


<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>
  
**Instrument**
</center>
</td>
<td style="width:50%">
  
<center>
  
**Quantity**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
  
SCR mounted on a heat sink
</center>
</td>
<td style="width:50%">
   
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Variable AC supply (autotransformer)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Rheostats (Rating: 1 KΩ, 100 KΩ)
</center>
</td>
<td style="width:50%">
  
<center>
  
**2**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Multi-meter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
AC- Voltmeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
AC-Ammeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
DC-Ammeter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
</table>



**•	Method-2: Using Digital Oscilloscope (DSO)**


<center>
<img src="images/th10.png" height="350px">

<br>
Fig. 6. Circuit Diagram using probes.
<br>
</center>
<br>

Steps for experimentation (Refer Fig. 6): 

  1.	A hall effect current probe is used to measure the anode current (i<sub>A</sub>) and a differential voltage probe (DVP) to is used to measure the anode-to-cathode voltage (v<sub>AK</sub>).<br>
  2.	Measure the anode current using the hall effect current probe (connect this probe to channel-2 of DSO which displays on y-axis). The voltage probe is connected across the SCR to measure the anode-to-cathode voltage (connect this probe to channel-1 of DSO which displays on x-axis).<br>
  3.	The gate supply circuit consists of a battery in series with a rheostat and a DC ammeter. The rheostat (R<sub>g</sub>) limits the gate current (I<sub>g</sub>) magnitude since only a very small amount of gate current is required to trigger the SCR into ON-state.<br>
  4.	Increase the input supply voltage (v<sub>in</sub>) gradually and observe the current-vs-voltage profile simultaneously on the DSO screen. This trace is the v-i characteristics of the SCR.<br<br>
  


**Instruments required for the above method:**


<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>
  
**Instrument**
</center>
</td>
<td style="width:50%">
  
<center>
  
**Quantity**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
  
SCR mounted on a heat sink
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Variable AC supply (autotransformer)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>

  <tr>
<td style="width:50%">
<center>
Rheostats (Rating: 1 KΩ, 100 KΩ)
</center>
</td>
<td style="width:50%">
  
<center>
  
**2**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Multi-meter
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Digital Oscilloscope (DSO)
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Differential Voltage Probe
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
  
  <tr>
<td style="width:50%">
<center>
Current Probe
</center>
</td>
<td style="width:50%">
  
<center>
  
**1**
</center> 
    </td>
  </tr>
</table>

### 2) IGBT

**Representation of IGBT:**

Fig. 7(a) and 7(b) show the symbolic representation of IGBT and a typical IGBT package available in market.

<br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<br>
<img src="images/ith1.png">
<br><br>
Fig. 7(a). Symbolic representation of IGBT.
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<br>
<img src="images/ith2.png">
<br><br>
Fig. 7(b). A typical IGBT package.
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<br>
<div style="float: left; width:100%;"><br>
  
**Introduction to IGBT:**

Fig. 8 shows the internal structure of an IGBT. Some of the key features of IGBT are compiled and given below.

</div>

<center>
<img src="images/ith3.png" height="350px">

<br>
Fig. 8. Internal structure of IGBT.
<br>
</center>
<br>

1.  Insulated-Gate Bipolar Transistor (IGBT) is a semiconductor power device. It combines the advantages of a BJT and a MOSFET. It has high input impedance, like MOSFET, and low on-state conduction losses, like BJT. However, it shows higher switching time especially during the turn-off transition.<br>

2.  It has a four PNPN layer structure: a) Two P-type doped (p) layers. b) Two N-type doped layers- one is heavy doped (n+) and the other is lightly doped (n-). It has three junctions: n+-p (J<sub>1</sub>), p-n- (J<sub>2</sub>) and n--p (J<sub>3</sub>).<br>
3.  The IGBT has three external terminals namely: Gate (G), Collector (C) and Emitter (E).<br><br>


**Operating modes of IGBT:**
<br>

1.  Forward Blocking State: An IGBT is a voltage controlled device. When the Collector voltage is made more positive with respect to the Emitter and the Gate current is zero, the Collector current is negligible.

2.  Forward Conducting State: When the Gate voltage is made more positive than the Emitter voltage, n carriers are drawn into the p-channel near the gate region; this results in a forward bias of the n-p and p-n junctions. Current freely flows from collector to emitter.<br>
During forward conduction, the IGBT will operate in any one of the following states, depending on the values of Collector-to-Emitter voltage (VCE) and the Gate voltage (VGE) values: Cut-off region, Active region or Saturation region.
  
3.  Reverse Blocking State:  When the Emitter voltage is higher with respect to the Collector voltage, no current can flow through the device even with gate current applied.<br><br>



**Characteristics of the IGBT:**

1.  Output Characteristics: It is the plot between the Collector-to-Emitter voltage (VCE) and the Collector current (IC) for a fixed Gate-to-Emitter voltage (VGE). The circuit diagram to plot the characteristics is given in Fig. 9. Voltage ‘VCE’ is measured by the voltmeter while the ammeter measures the current ‘IC’.<br><br>

<center>
<img src="images/ith4.png" height="350px">

<br>
Fig. 9. Circuit diagram for Output characteristics.
<br>
</center>
<br> 

The output characteristics of IGBT is shown in Fig. 10.

<center>
<img src="images/ith5.png" height="350px">

<br>
Fig. 10. Output characteristics of IGBT.
<br>
</center>
<br> 
IGBT has three operating regions: Cutoff region, Linear region and Saturation region as shown in Fig. 11. <br><br>

a)  In cutoff region, the Gate voltage is lower than the threshold (V<sub>T</sub>) and the IGBT doesn’t conduct.<br>
b)  In linear region, the Collector current I<sub>C</sub> varies in proportion to the Collector-to-Emitter voltage V<sub>CE</sub>. IGBT is operated in the linear region for switching actions.<br>
c)  In the saturation region, the Collector current remains almost constant for any increase in the value of V<sub>CE</sub>.<br>

<div style="float: left; width:100%;"><br>

### 3) MOSFET


**Representation of MOSFET:**

Fig. 12(a) and 12(b) show the symbolic representation of MOSFET and a typical MOSFET package available in market.

<br>

<table border="0" align="center" style="width:100%; border:none;">
  <tr>
<td style="width:50%">
<center>

<br>
<img src="images/mth1.png">
<br><br>
Fig. 12(a). Symbolic representation of MOSFET
<br><br>
</center>
</td>
<td style="width:50%">
  
<center>

<br>
<img src="images/mth2.png">
<br><br>
Fig. 12(b). A typical MOSFET package
<br><br>
</center> 
    </td>
  </tr>
</table>
<br>

<br>
<div style="float: left; width:100%;"><br>
  
**Introduction to MOSFET:**

Fig. 13 shows the internal structure of MOSFET. Some of the key features of MOSFET are compiled and given below.

</div>

<center>
<img src="images/mth3.png" height="350px">

<br>
Fig. 13. Internal structure of MOSFET.
<br>
</center>
<br>

1.  It is a three-terminal majority carrier device. It exhibits high switching speed, low rise and fall time. It is suitable for low-power, high-frequency switching applications such as DC-DC converters.<br>

2.  It is a voltage-controlled device and the ‘Gate circuit’ requires only a small amount of current for it to start conducting (ON-State).<br>

3.  There are two types of MOSFETs: a) Depletion type, b) Enhancement type. Both have three terminals: Drain (D), Source (S) and Gate (G).<br>

4.  Enhancement-type MOSFET works in two modes: ON-state (conducting) and OFF-state (blocking), controlled by the PWM signal given to the Gate terminal.<br>

5.  For gate-to-source voltage more than threshold (V<sub>T</sub>), Enhancement-type MOSFET conducts. At zero gate voltage, it remains in OFF-state. Hence, it is generally used as switching device in power converters/ power conversion applications.<br>    


**Operating modes of MOSFET switching device:**
<br>

1.  Forward Blocking State (v<sub>DS</sub> > 0, v<sub>GS</sub> = 0): A MOSFET is a voltage controlled device. When Drain-to-Source voltage (v<sub>DS</sub>) is positive, both the junctions remain reverse biased. MOSFET doesn’t conduct.

2.  Forward Conducting State (v<sub>DS</sub> > 0, v<sub>GS</sub> ≥ V<sub>T</sub>): When Drain-to-Source voltage (v<sub>DS</sub>) is positive, with Gate-to-Source voltage (v<sub>GS</sub>) more than threshold voltage, the MOSFET starts conducting and hence current flows from drain to source. 
During forward conduction, the MOSFET will operate in any one of the following states, depending on the values of drain-to-source voltage (V<sub>DS</sub>) and the Gate voltage (V<sub>GS</sub>) values: Cut-off region, linear region and Saturation region.
  
3.  Reverse Blocking State (v<sub>DS</sub> < 0):  When the drain-to-source voltage (V<sub>DS</sub>) is negative the junctions become reverse biased and MOSFET stops conducting.<br><br>

**Characteristics of the MOSFET:**

Output Characteristics: It is the plot between the Drain-to-Source voltage (V<sub>DS</sub>) and the Drain current (I<sub>D</sub>) for a fixed Gate-to-Source voltage (V<sub>GS</sub>). The circuit diagram to plot these characteristics is given in Fig. 14. Voltage ‘V<sub>DS</sub>’ is measured by the voltmeter while the ammeter measures the current ‘I<sub>D</sub>’.<br><br>

<center>
<img src="images/mth4.png" height="350px">

<br>
Fig. 14. Circuit diagram for output characteristics.
<br>
</center>
<br> 

The output characteristics of MOSFET is shown in Fig. 14.

<center>
<img src="images/mth5.png" height="350px">

<br>
Fig. 15. Output characteristics of MOSFET.
<br>
</center>
<br> 

MOSFET has three operating regions: Cutoff region, Linear region and Saturation region as shown in Fig. 15.
