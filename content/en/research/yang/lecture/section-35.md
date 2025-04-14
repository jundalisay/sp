---
heading: Section 35
title: "BPS Monopoles"
description: "This is the most subtle and interesting class of quantum field theories"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 66
---


## BPS Monopoles

Something special happens when we set = 0 in (2.86). Here the scalar potential vanishes which means that, at least classically, we can pick any expectation value v for the scalar. 

The choice of v should be thought of as extra information needed to define the vacuum of the theory. (In the quantum theory, one typically expects to
generate a potential for . 

The exception to this is in supersymmetric theories, where cancellations ensure that the quantum potential also vanishes. 

The monopole that we describe below have a nice interplay with supersymmetry, although this is
beyond the scope of these lectures.)

When the potential vanishes, it is possible to use the Bogomolnyi trick to rewrite the energy functional. In terms of the non-Abelian magnetic field Bi = 12 ✏ijk Fjk , the energy of a static configuration with vanishing electric field is

<!-- Z
1
E = 2 d3 x tr Bi2 + (Di )2
g
Z
1
= 2 d3 x tr (Bi ⌥ Di )2 ± 2 tr Bi Di
g
Z
2
± 2 d3 x @i tr Bi
g -->

where, to get to the last line, we have discarded the positive definite term and integrated by parts, invoking the Bianchi identity Di Bi = 0. 

We recognise the final expression as the magnetic charge. We find that the energy of a configuration is bounded by the magnetic charge

<!-- E
2v|m|
g2
(2.93) -->

A configuration which saturates this bound is guaranteed to solve the full equations of motion. This is achieved if we solve the first order Bogomolnyi equations

<!-- Bi = ±Di
(2.94) -->

with the ± sign corresponding to monopoles (with m > 0) and anti-monopoles (with m < 0) respectively. 

It can be checked that solutions to (2.94) do indeed solve the full equations of motion (2.92) when = 0.

Solutions to (2.94) have a number of interesting properties. First, it turns out that the equations of motion for a single monopole have a simple analytic solution,

<!-- h(r) = vr coth(vr)
1 and k(r) =
vr
sinh vr -->

This was first discovered by Prasad and Sommerfield. In general, solutions to (2.94) are referred to as BPS monopoles, with Bogomolnyi’s name added as well.

A warning on terminology: these BPS monopoles have rather special properties in the context of supersymmetric theories where they live in short multiplets of the supersymmetry algebra. 

The term “BPS” has since been co-opted and these days is much more likely to refer to some kind of protected object in supersymmetry, often one that has nothing to do with the monopole.

The Bogomolnyi equations (2.94) also have solutions corresponding to monopoles with higher magnetic charges.

These solutions include configurations that look like far separated single charge monopoles. This is mildly surprising. 

Our earlier intuition told us that such solutions should not exist because the repulsive force between magnetically charged particles would ensure that the energy could be lowered by moving them further apart. 

That intuition breaks down in the Bogomolnyi limit because we have a new massless particle – the scalar
– and this gives rise to a compensating attractive
force between monopoles, one which precisely cancels the magnetic repulsion. 

You can learn much more about the properties of these solutions, and the role they play in supersymmetric theories, in the lectures on Solitons.

## Monopoles in Other Gauge Groups

It is fairly straightforward to extend the discussion above the other gauge groups G.

We again couple a scalar field in the adjoint representation and give it an expectation value that breaks G ! H where H = U (1)r , with r is the rank of the gauge group. 

Given an expectation value for , we can always rotate it by acting with G. However, by definition, H leaves the scalar untouched which means that in configurations are
now classified by maps from S21 into the space G/H. 

(In our previous discussion we had G/H = SU (2)/U (1) = S2 which coincides with what we found in (2.88).) A result in homotopy theory tells us that, for simply connected G, ⇧2 (G/H) = ⇧1 (H) = Zr

We learn that the ’t Hooft-Polyakov monopoles are labelled by an r-dimensional magnetic charge vector m. This agrees with our analysis of ’t Hooft lines in Section 2.6. 

A closer look reveals that the ’t Hooft-Polyakov monopoles have magnetic charge m 2 2⇡ ⇤co root (g), as required by the Goddard-Nuyts-Olive quantisation (2.80).


## 2.8.2 The Witten Effect 

Again We saw in Section 1.2.3 that, in the presence of a ✓ term, a Dirac monopole picks up an electric charge. As we now show this phenomenon, known as the Witten effect, also occurs for the ’t Hooft-Polyakov monopole.

To see this, we simply need to be careful in identifying the electric charge operator in the presence of a monopole. 

We saw in (2.90) that the unbroken U (1) ⇢ SU (2) is determined by the . The corresponding global gauge transformation is

<!-- 1
Aμ = Dμ
v -->

But we already did the hard work and computed the Noether charge Q associated to such a gauge transformation in (2.30), where we saw that it picks up a contribution from the ✓ term (2.22); we have

<!-- ✓
◆
Z
1
✓g 2
1
3
Q = 2 d x tr Ei + 2 Bi
Di
g
8⇡
v -->

In our earlier discussion, around equation (2.30), we were working inthe vacuum and could discard the contribution from ✓. 

However, in the presence of a monopole both terms contribute. The total electric charge Q is now

<!-- ✓g 2 m
Q=q+
8⇡ 2 -->

with the naive electric charge q defined as

<!-- Z
1
q=
d3 x tr Di Ei
v -->

(2.95)
and the magnetic charge m defined, as in (2.91), by

<!-- Z
1
m=
d3 x tr Di Bi
v -->

We see that the theta term does indeed turn the monopole into a dyon. This agrees with our previous discussion of the Witten effect (1.19), with the seemingly different
factor of 2 arising because, as explained above, q is quantised in units of 1/2 in the
non-Abelian gauge theory.


