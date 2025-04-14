---
heading: Section 23
title: "Flux Lines in a Superconductor"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 46
---


## 2.5.2 An Analogy: Flux Lines in a Superconductor

A superconductor is a simple system which provides a useful analogy for confinement.

A superconducting vacuum can expel magnetic fields.

If you pass a magnetic field through a superconductor, it resists. This is known as the Meissner effect. 

If you insist by cranking up the magnetic field, the
superconductor will relent. But it will not do so uniformly. 

Instead, the magnetic field will form string-like filaments known as vortices.

We can model this using the Abelian Higgs model. This is a U (1) gauge field, coupled to a complex scalar

<!-- Z
1
S = d4 x
Fμ⌫ F μ⌫ + |Dμ |2
(| |2 v 2 )2
4e2
with Dμ = @μ -->
iAμ . (As an aside: in an actual superconductor, the complex scalar field describes the cooper pair of electrons, and should have a non-relativistic kinetic
term rather than the relativistic kinetic terms we use here.)

In the vacuum, the scalar has an expectation value, h| |i = v, spontaneously breaking the U (1) gauge symmetry and giving the photon a mass, m2 = 2e2 v 2. 

This is, of course, is the Higgs mechanism. In this vacuum, the scalar also has a mass given by m2 = 4 v 2.

Let’s start by seeing how this explains the Meissner effect. We’ll look for time dependent solutions, with A0 = 0 and a magnetic field B i = 12 ✏ijk Fjk . If we assume that the Higgs field doesn’t deviate from = v then the equation of motion for the
gauge field is

<!-- r⇥B=
m2 A
)
r2 B = m 2 B -->

This is known as the London equation. It tells us that magnetic fields are exponentially damped in the Higgs phase, with solutions of the form B(x) = B0 e m x . In the context of superconductors, the length scale L = 1/m is known as the penetration depth. 

Later, another length scale, ⇠ ⇠ 1/m , will also be important; this is called the correlation length.

Of course, the assumption that = v is not justified:
is a dynamical field and is determined by its equation of motion. This is where we will find the vortices. 

We decompose the complex scalar as = ⇢eiff

All finite energy, classical configurations must have ⇢ ! v as x ! 1. But the phase is arbitrary. 

This opens up an interesting topological possibility. 

Consider a classical configuration which is invariant in the x3 direction, but is localised in the (x1 , x2 ) plane. 

The translational invariance x3 reflects the fact that we will be constructing an infinite string solution, aligned along x3 . 

We parameterise the plane by radial coordinates x1 + ix2 = rei✓ . Then all configurations whose energy is finite when integrated over the (x1 , x2 ) plane involve a map 

ff(✓) : S11 7! S1
(2.68)

These maps fall into disjoint classes, labelled by the number of times that winds as we move around the asymptotic circle S11. 

This is the same kind of idea that we met when discussing theta vacua and instantons in Sections 2.2 and 2.3. 

In that case we were dealing with the homotopy group ⇧3 (S3 ); here we have a simpler situation, with
maps of the form (2.68) classified by
⇧1 (S1 ) = Z 

In this case, it is simple to write down an expression for the integer n 2 Z which classifies the map. It is the winding number,

<!-- 1
n=
2⇡
Z
d✓
S11
@ff
2 Z
@✓
(2.69) -->


In this way, the space of field configurations decompose into sectors, labelled by n 2 Z.
The vacuum sits in the sector n = 0. 

A particularly simple way to find classical solutions is to minimize the energy in a sector n 6= 0. These solutions, which are stabilised by their winding at infinity, and are often referred to as topological solitons. 

In the present context, these solitons will the vortices that we are looking for.

<!-- B
φ
v
r
L
r
ξ -->

Figure 13: The profile for the magnetic field and Higgs field in a vortex.

We’ll consider radially symmetric scalar profiles of the form

<!-- (r, ✓) = ⇢(r)ein✓
(2.70) -->

We will first see why any configuration with n 6= 0 necessarily comes with a magnetic field. 

Because our configurations are invariant under x3 translations, they will always have a linearly diverging energy corresponding to the fact that we have an infinite string. But the energy density in the (x1 , x2 ) plane should integrate to a finite number. 

We denote the energy per unit length of the vortex string by . The kinetic term for the scalar gives a contribution to the energy that includes

<!-- ⇠
Z
drd✓ r
✓
1 @
r @✓
iA✓
◆
2
=
Z
in⇢
drd✓ r
r
2
iA✓ ⇢ -->

If we try to set A✓ = 0, the energy has a logarithmic divergence from the integral over the (x1 , x2 ) plane. 

To compensate we must turn on A✓ ! n/r as r ! 1. But this means that the configuration (2.70) is accompanied by a magnetic flux

<!-- Z
I
2
= d x B3 = d✓ rA✓ = 2⇡n
(2.71) -->

We see that the flux is quantised. This is the same quantisation condition that we saw for magnetic monopoles in Section 1.1 (albeit with a rescaled convention for the gauge field because we chose to put the coupling e2 in front of the action). 

Note, however, that here we haven’t invoked any quantum mechanics; in the Higgs phase, the quantisation of flux happens for topological reasons, rather than quantum reasons.

So far we have talked about configurations with winding, but not yet discussed whether they are solutions to the equations of motion. It is not hard to find solutions for a single vortex with n = 1 (or, equivalently, an anti-vortex with n = 1). 

We write an ansatz for the gauge field as A✓ = f (r)/r and require f (r) ! 1 as r ! 1. 

The equations of motion then reduce to ordinary differential equations for ⇢(r) and f (r).

Although no analytic solutions are known, it is simple to solve them numerically. These solutions are often referred to as Nielsen-Olesen vortices.

Here we will build some intuition for what these look like without doing any hard work. The key feature is that winds asymptotically, as in (2.70), which means that by the time we get to the origin it has something of an identity crisis and does not know which way to point. 

The only way in which the configuration can remain smooth is if = 0 at the origin. But it costs energy for to deviate from the vacuum, so it must do so over as small a scale as possible. This scale is ⇠ ⇠ 1/m .

Similarly, we know that the flux (2.71) must be non-zero. 

It is energetically preferable for this flux to sit at the origin, since this is where the Higgs field vanishes. 

This flux spreads over a region associated to the penetration length L ⇠ 1/m . The resulting profiles for the Higgs and magnetic fields are sketched in the figures. 

