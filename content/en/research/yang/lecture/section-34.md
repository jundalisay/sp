---
heading: Section 34
title: "Hooft-Polyakov Monopoles"
description: "This is the most subtle and interesting class of quantum field theories"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 64
---


## 2.8 ’t Hooft-Polyakov Monopoles

Coupling dynamical, electrically charged particles to Yang-Mills theory is straightforward, although understanding their dynamics may not be. But what about dynamical magnetically charged particles?

For Abelian gauge theories, this isn’t possible: if you want to include Dirac monopoles in your theory then you have to put them in by hand. 

But for non-Abelian gauge theories, it is a wonderful and remarkable fact that, with the right matter content,
magnetic monopoles come along for free: they are solitons in the theory.

Magnetic monopoles appear whenever we have a non-Abelian gauge theory, broken to its Cartan subalgebra by an adjoint Higgs field. 

The simplest example is SU (2) gauge theory coupled to a single adjoint scalar. As explained previously, we use
the convention in which sits in the Lie algebra, so = a T a . For G = SU (2) the generators are T a = a /2, with a the Pauli matrices. We take the action to be

<!-- ✓
◆2
Z
1
1
v2
4
μ⌫
2
2
S= dx
trF Fμ⌫ + 2 tr(Dμ )
tr
(2.86)
2g 2
g
4
2 -->

Note that we’ve rescaled the scalar
so that it too has a 1/g 2 sitting in front of it.
The potential is positive definite. The vacuum of the theory has constant expectation
value h i. Up to a gauge transformation, we can take

<!-- 1 v 0
h i=
(2.87)
2 0 v -->

This breaks the gauge group SU (2) ! U (1). The spectrum consists of a massless photon – which, in this gauge, sits in the T 3 part of the gauge group — together with
massive W-bosons and a massive scalar.

There are, however, more interesting possibilities for the expectation value. Any finite energy excitation must approach a configuration with vanishing potential at spatial infinity. 

Such configurations obey tr 2 ! v 2 as |x| ! 1. Decomposing the Higgs field into the generators of the Lie algebra, = a T a , a = 1, 2, 3, the requirement that the potential vanishes defines a sphere in field space,
n

<!-- o
S2 :=
: a a = v2 -->

(2.88)

We see that for any finite energy configuration, we must specify a map which tells us the behaviour of the Higgs field asymptotically, 

<!-- : S21 7! S2 -->

The fact that these maps fall into disjoint classes should no longer be a surprise: it’s the same idea that we met in Sections 2.2 and 2.3 when discussing theta vacua and instantons, and again in Section 2.5.2 when discussing vortices. This time the relevant homotopy group is

<!--   -->

Given a configuration , the winding number is computed by
Z
1
⌫=
d2 Si ✏ijk ✏abc a @j b @k c 2 Z
8⇡v 3 S21
(2.89)
In a sector with ⌫ 6= 0, the gauge symmetry breaking remains SU (2) ! U (1). The
difference is that now the unbroken U (1) ⇢ SU (2) changes as we move around the
asymptotic S21 .

The next step is to notice that if the Higgs field has winding ⌫ 6= 0, then we must also turn on a compensating gauge field. 

The argument is the same as the one we saw for vortex strings. Suppose that we try to set Ai = 0. Then, the covariant derivatives are simply ordinary derivatives and, asymptotically, we have (Di )2 = (@i )2 ⇠ (@✓ )2 /r2 , with @✓ denoting the (necessarily non-vanishing) variation as we move around the angular directions of the asymptotic S21 . 

The energy of the configuration will then include the term

<!-- Z
Z
Z
1
1
(@✓ )2
3
2
2
E = 2 d x tr (@i ) ⇠ 2
d ⌦ dr r2 tr 2
g
g S21
r -->

This integral diverges linearly. We learn that if we genuinely want a finite energy
excitation in which the Higgs field winds asymptotically then we must also turn on the
– 110 –gauge fields Ai to cancel the 1/r asymptotic fall-off of the angular gradient terms, and
ensure that D✓ ! 0 as r ! 1. We want to solve:

<!-- Di = @ i
i[Ai , ] ! 0
)
Ai !
i
ai
[ , @i ] +
2
v
v -->

Here the first term works to cancel the fall-off from @i . To see this, you will need to use the fact that tr 2 ! v 2 , and so tr( @i ) ! 0, as well as the su(2) commutation relations. 

The second term in Ai does not contribute to the covariant derivative Di .

The function ai is the surviving, massless U (1) photon which can be written in a gauge
invariant way as

<!-- 1
aμ = tr( Aμ )
v -->

(2.90)
We can also compute the asymptotic form of the field strength. The same kinds of
manipulations above show that this lies in the same direction in the Lie algebra as


<!-- 1
Fij = Fij
v
with
Fij = fij +
i
tr ( [@i , @j ])
v3 -->

Here fij = @i aj @j ai is the Abelian field strength that we may have naively expected.

But we see that there is an extra term, and this brings a happy surprise, since it contributes to the magnetic charge m of the U (1) field strength. This is given by:

<!-- Z
Z
1 ijk
1
2
m=
d Si ✏ Fjk = 3 d2 Si ✏ijk ✏abc a @j b @k c = 4⇡⌫
(2.91)
2
2v -->

with ⌫ the winding number defined in (2.89). We learn that any finite energy configuration in which the Higgs field winds asymptotically necessarily carries a magnetic
charge under the unbroken U (1) ⇢ SU (2).

This object is a soliton and goes by the name of the ’t Hooft-Polyakov monopole.

The topological considerations above have led us to a quantised magnetic charge. 

However, at first glance, the single ’t Hooft-Polyakov monopole with ⌫ = 1 seems to have twice the charge required by Dirac quantisation (1.3), since the W-bosons
have electric charge q = 1. 

But there is nothing to stop us including matter in the fundamental representation of SU (2) with q = ± 12 , with respect to which the ’t Hooft-Polyakov monopole has the minimum allowed charge. 

## 2.8.1 Monopole Solutions

We have not yet solved the Yang-Mills-Higgs equations of motion with a given magnetic charge. 

In general, no static solutions are expected to exist with winding ⌫ > 1, because magnetically charged objects typically repel each other. 

For this reason, we restrict attention to the configurations with winding ⌫ = ±1.

We can write an ansatz for a scalar field with winding 

<!-- n = 1,
xa
a
= 2 h(r) with h(r) !
r
(
r!0
0
r!1
vr -->

This is the so-called “hedgehog” ansatz, since the direction of the scalar field = a T a

is correlated with the direction xa in space. Just like a hedgehog. In particular, this means that the SU (2) gauge action on a and the SO(3) rotational symmetry on xa are locked, so that only the diagonal combination are preserved by such configurations. 

We can make a corresponding ansatz for the gauge field which preserves the same diagonal

<!-- SO(3),
Aai =
xj
✏aij 2 [1
r
k(r)]
with k(r) !
(
1
0
r!0
r!1 -->

We can now insert this ansatz into the equations of motion

<!-- Dμ Fμ⌫
i[ , D⌫ ] = 0 and D2 = 2g 2 (tr
2
v2) -->

(2.92)

This results in coupled, ordinary differential equations for h(r) and k(r). 

In general, they cannot be solved analytically, but it is not difficult to find numerical solutions for the minimal ’t Hooft-Polyakov monopole.

