---
heading: Section 19
title: "One-Loop Determinants"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 38
---



Let us integrate out the fluctuating fields, Aμ and c, to determine their effect on the dynamics of the background field Āμ .

<!-- Z
Seff [Ā]
e
= D A Dc Dc† e S[Ā, A,c] -->

Things are simplest if we take our background field to obey the classical equations of motion, D̄μ F̄ μ⌫ , which ensures that the term linear in Aμ in the action disappears.

Furthermore, at one loop it will suffice to ignore the terms cubic and quadratic in fluctuating fields that sit on the final line of the action above. We’re then left just with Gaussian integrations, and these are easy to do, 
<!-- e Seff [Ā] = det
1/2
+1
gauge det
1
2g 2
ghost e
R
d4 x tr F̄μ⌫ F̄ μ⌫ -->
where the quadratic fluctuation operators can be read off from the action and are given by 

<!-- μ⌫
gauge = D̄2 μ⌫ + 2i[F̄ μ⌫ ·] and
ghost = D̄2 -->

where the F̄ μ⌫ should be thought of as an operator acting on objects in the adjoint representation. 

This extra term, F̄μ⌫ , arising from the gauge fields can be traced to the fact that they are spin 1 excitations. 

As we will see below, this contributes the paramagnetic part to the beta function and, ultimately, is responsible for the famous minus sign that leads to anti-screening.

Taking logs of both sides, the effective action is given by

<!-- Z
1
1
Seff [Ā] = 2 d4 x tr F̄μ⌫ F̄ μ⌫ + Tr log gauge Tr log
2g
2
(2.63) -->

ghost where the Tr means the trace over group, Lorentz and momentum indices (as opposed to tr which is over only gauge group indices). 

We need to figure out how to compute the contributions from these quadratic fluctuation operators.


## The Ghost Contribution

The contribution from the ghost fields are simplest because it has the least structure. We write

<!-- @2 +
ghost =
1+
2 -->

where the subscripts keep track of how many Āμ terms each operator has,

<!-- 1 = i@
μ
Āμ + iĀμ @ μ
and
μ
2 = [Ā , [Āμ , ·]] -->

where, again these operators act on objects in the adjoint representation. This will prove important to get the right normalisation factor. 

We then have

<!-- Tr log
ghost = Tr log
@2 +
1+
2
2
= Tr log( @ ) + Tr log 1 + ( @ 2 ) 1 (
= Tr log( @ 2 ) + Tr ( @ 2 ) 1 (
1+
1+
2)
2)
1
Tr ( @ 2 ) 1 (
2
1+
2)
2
+ ... -->

The first term is just an overall constant. We can ignore it. In the second term, Tr 1 includes the trace over gauge indices and vanishes because tr Āμ = 0. 

This is just the statement that there is no gauge invariant contribution to the kinetic term linear in Āμ. 

So the first terms that we need to worry about are the quadratic terms.

<!-- 2
= Tr (( @ )
1
2) =
Z
d4 k
tradj [Āμ (k)Ā⌫ ( k)]
(2⇡)4
Z
d4 p μ⌫
(2⇡)4 p2 -->

where we’ve also included a graphical reminder of where these terms come from in a more traditional Feynman diagram approach. 

We also have:

<!-- Z
1
1
d4 k
2 1
2 1
=
Tr (( @ )
(
@
)
)
=
tradj [Āμ (k)Ā⌫ ( k)] ⇥ fμ⌫ (k)
1
1
2
2
(2⇡)4
– 71 –with
fμ⌫ (k) =
Z
d4 p (2p + k)μ (2p + k)⌫
(2⇡)4
p2 (p + k)2 -->

Note that the trace over group indices should be taken with Aμ acting on adjoint valued objects, as opposed to our convention in (2.3) where it naturally acts on fundamental objects.

We would like to massage these into the form of the Yang Mills action. In momentum space, the quadratic part of the Yang-Mills action reads:

<!-- Z
1
Squad = 2 d4 x tr (@μ Ā⌫ @ μ Ā⌫ @μ Ā⌫ @⌫ Āμ )
g
Z
⇥
⇤
1
d4 k
= 2
tr Āμ (k)Ā⌫ ( k) (k μ k ⌫ k 2 μ⌫ )
4
g
(2⇡) -->


There are a couple of issues: 

1. The Yang-Mills action is written in terms of fundamental generators which, as in (2.57), are normalised as tr T a T b = 12 ab. 

Meanwhile, the trace in the one-loop contributions is in the adjoint representation, and is given by tradj T a T b = C(adj) ab

2. We must perform the integral over the loop momentum p. 

This diverges. These are the kind of integrals that were covered in previous QFT courses.

We implement a UV cut-off ⇤U V to get
<!-- ✓ 2 ◆
Z
⇥
⇤ μ ⌫
C(adj)
d4 k
⇤U V
2 μ⌫
Tr log ghost =
tr Āμ (k)Ā⌫ ( k) (k k
k
) log
2
4
3(4⇡)
(2⇡)
k2 -->

This is our first contribution to the logarithmic running of the coupling that we advertised in (2.56).

Above we focussed purely on the quadratic terms.

Expanding the Yang-Mills action also gives us cubic and quadratic terms and, for consistency, we should check that they too receive the same corrections. 

They do. In fact, this is guaranteed to work
because of the manifest gauge invariance gauge Āμ = D̄μ !.
