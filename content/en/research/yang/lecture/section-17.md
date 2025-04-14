---
heading: Section 17
title: "Anti-Screening and Paramagnetism"
description: "The computations of the 1-loop beta functions are rather involved"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 34
---


## 2.4.1 Anti-Screening and Paramagnetism

The computations of the 1-loop beta functions are rather involved. 

It’s useful to have a more down-to-earth picture in mind to build some understanding for what’s going on. 

There is nice intuitive analogy that comes from condensed matter.

In condensed matter physics, materials are not boring passive objects. They contain mobile electrons, and atoms with a flexible structure, both of which can respond to any external perturbation, such as applied electric or magnetic fields. 

One consequence of this is an effect known as screening. In an insulator, screening occurs because an applied electric field will polarise the atoms which, in turn, generate a counteracting electric field. 

One usually describes this by introducing the electric displacement D, related to the electric field through
D = ✏E where the permittivity ✏ = ✏0 (1 + e ) with e the electrical susceptibility. 

For all materials, e > 0. This ensures that the effect of the polarisation is always to reduce the electric field, never to enhance it. 

You can read more about this in Section 7 of the lecture notes on Electromagnetism. 

(As an aside: In a metal, with mobile electrons, there is a much stronger screening effect which turns the Coulomb force into an exponentially suppressed Debye-Hückel, or Yukawa, force. 

This was described in the final section of the notes on Electromagnetism, but is not the relevant effect here.)

What does this have to do with quantum field theory? In quantum field theory, the vacuum is not a passive boring object. 

It contains quantum fields which can respond to any external perturbation. In this way, quantum field theories are very much like condensed matter systems. A good example comes from QED. 

There the one-loop beta function is positive and, at distances smaller than the Compton wavelength of the electron, the gauge coupling runs as
<!-- +
+
+ + +
+
◆
+
⇤2U V
μ2
+
✓
+
1
1
1
= 2+
log
2
e (μ)
e0 12⇡ 2
+ -->

This tells us that the charge of the electron gets effectively smaller as we look at larger distance scales. This can be understood in very much the same spirit as condensed matter systems. In the presence of an external charge, 

Figure 11: electron-positron pairs will polarize the vacuum, as shown in the figure, with the positive charges clustering closer to the external charge.

This cloud of electron-positron pairs shields the original charge, so that it appears reduced to someone sitting far away.

The screening story above makes sense for QED. But what about QCD? The negative beta function tells us that the effective charge is now getting larger at long distances,
rather than smaller. 

In other words, the Yang-Mills vacuum does not screen charge: it anti-screens. 

From a condensed matter perspective, this is unusual. As we mentioned above, materials always have e > 0 ensuring that the electric field is screened, rather than anti-screened.

However, there’s another way to view the underlying physics. We can instead think about magnetic screening. Recall that in a material, an applied magnetic field in-
duces dipole moments and these, in turn, give rise to a magnetisation. 

The resulting magnetising field H is defined in terms of the applied magnetic field as B = μH with the permeability μ = μ0 (1 + m ).

Here m is the magnetic susceptibility and, in contrast to the electric susceptibility, can take either sign. 

The sign of m determines the magnetisation of the material, which is given by M = m H. For 1 < m < 0, the magnetisation points in the opposite direction to the applied magnetic field. 
 
Such materials are called diamagnets. (A perfect diamagnet has m = 1. This is what happens in a superconductor.) 

In contrast, when m > 1, the magnetisation points in the same direction as the applied magnetic field. Such materials are called paramagnets.

In quantum field theory, polarisation effects can also make the vacuum either diamagnetic or paramagnetic. Except now there is a new ingredient which does not show
up in real world materials discussed above: relativity! 

This means that the product must be ✏μ = 1 because “1” is the speed of light. 

In other words, a relativistic diamagnetic material will have μ < 1 and ✏ > 1 and so exhibit screening. But a relativistic paramagnetic material will have μ > 1 and ✏ < 1 and so exhibit anti-screening. Phrased in this way,
the existence of an anti-screening vacuum is much less surprising: it follows simply from paramagnetism combined with relativity. 

For free, non-relativistic fermions, we calculated the magnetic susceptibility in the lectures on Statistical Physics when we discussed Fermi surfaces. In that context, we found two distinct contributions to the magnetisation. 

Landau diamagnetism arose because electrons form Landau levels. Meanwhile, Pauli paramagnetism is due to the spin of the electron. 

These two effects have the same scaling but different numerical coefficients and one finds that the paramagnetism wins.

In the next section we will compute the usual one-loop beta-function. 

We present the computation in such a way that it makes clear the distinction between the diamagnetic and paramagnetic contributions. Viewed in this light, asymptotic freedom can be traced to the paramagnetic contribution from the gluon spins.

