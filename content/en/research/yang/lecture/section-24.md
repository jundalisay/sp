---
heading: Section 24
title: "Type I, Type II and Bogomonlyi"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 48
---


## Type I, Type II and Bogomonlyi

These vortices provide a good analogy for confinement. 

There are 2 length scales at play in the vortex solutions. 

1. The Higgs field drops to zero over a region of size 
2. The magnetic field is spread over a region of size ⇠ L. 

The ratio of these 2 scales determines the force between two parallel vortices. 

For far separated vortices, the force is exponentially suppressed, reflecting the fact that the theory is gapped. 

As they come closer, either their magnetic flux will begin to overlap (if L > ⇠), or their scalar profiles will begin to overlap (if ⇠ > L). 

The magnetic flux is repulsive, while the scalar field is attractive. Based on this distinction, superconductors are divided into 2 classes:

1. Type I: ⇠ > L. 

In this case, the overlap of the scalar profiles of vortices provide the dominant, attractive force. If one applies a uniform magnetic field to a superconductor, it turns into one big vortex. 

But a big vortex is effectively the same as turning the system back into the normal phase. This means that the superconductor resists an applied magnetic field until it reaches a critical value, at which point the system exits the Higgs phase. 

This means that no vortices are seen in Type I superconductors.


2. Type II: ⇠ < L.

The magnetic flux of the vortices overlap are they approach, resulting in a repulsive force. This means that when a uniform magnetic field is applied
to a Type II superconductor, it will form many vortices, each of which wants to be as far from the others as possible. The result is a periodic array of vortices known as an Abrikosov lattice. An example is shown in the figure4.

Figure 14: An Abrikosov lattice in a Type II superconductor.

At the boundary between Type I and Type II superconductors, the heuristic arguments above suggest that there are no forces between vortices. Mathematically, something rather pretty happens at this point. We have m2 = m2 or, equivalently,
= e2 /2. 

At this special value, we can write the tension of the vortex string as the sum of squares,

<!-- Z
1 2 X
e2
2
2
=
d x 2 B3 +
|Di | + (| |2 v 2 )2
2e
2
i=1,2
Z
=
d2 x |D1
iD2 |2 + iD1 † D2
iD2 † D1
=
=
Z
Z
+
d2 x |D1
1
B3 + e2 (| |2
2e2
iD2 |2
d2 x |D1 + iD2 |2 +
v2)
2
i † [D1 , D2 ] +
B3 (| |2
v2)
1
B32 + e2 (| |2
2e2
1
B3 + e2 (| |2
2e2
v2)
2
v2)
2
B3 (| |2
v2)
+ v 2 B3 

-->
where, in going to the last line, we used the fact that [D1 , D2 ] = iF12 = +iB3 . This “completing the square” trick is the same kind of Bogomolnyi argument that we used in Section 2.3 when discussing instantons. 

Since the two squares are necessarily positive, the energy can be bounded by

<!-- Z
E
d2 x v 2 B3 = 2⇡v 2 n
4 -->

This picture is taken from P. Goa et al, Supercond. Sci. Technol. 14, 729 (2001). A nice gallery of vortex lattices can be found here.

Figure 15: The flux lines for a monopole and anti-monopole in vacuum.

Figure 16: The same flux lines in a superconductor.

where we have related the flux to the winding using (2.71). This is nice. In a sector
with winding n > 0, there is a minimum energy bound. Moreover, we can saturate this
bound by requiring that the quantities in the squares vanish,
D1 = iD2
and B3 =
e2 (| |2
v2)
(2.72)
These are the Bogomolnyi vortex equations. For n < 0, one can play a similar game
with some minus signs shu✏ed around to derive Bogomolnyi equations for anti-vortices.
The vortex equations (2.72) have a number of remarkable properties. In particular,
it can be shown that the general solution has 2n parameters which, at least for far sep-
arated vortices, can be thought of as the position of n vortices on the plane. Physically,
this arises because there is no force between the vortices. You can read more about this in the lecture notes on Solitons.

