---
heading: Section 18
title: "Computing the Beta Function"
description: "The Chern-Simons functional W [A] is not obviously gauge invariant."
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 36
---


## 2.4.2 Computing the Beta Function

In this section, we will sketch the derivation of the beta function (2.58). We’re going to use an approach known as the background field method. 

We work in Euclidean space and decompose the gauge field as Aμ = Āμ + Aμ

We will think of Āμ as the low-energy, slowly moving part of the field. It is known as the background field. 

Meanwhile, Aμ describes the high-energy, short-wavelength modes whose effect we would like to understand. The field strength becomes 

Fμ⌫ = F̄μ⌫ + D̄μ A⌫
D̄⌫ Aμ
i[ Aμ , A⌫ ]
where D̄μ = @μ i[Āμ , ·] 

is the covariant derivative with respect to the background field Āμ . 

From this, we can write the action (2.55) as

<!-- 1
SY M = 2
g
Z
4
d x tr

1
F̄μ⌫ F̄ μ⌫ + 2F̄ μ⌫ D̄μ A⌫
2
+ D̄μ A⌫ D̄μ A⌫ D̄μ A⌫ D̄⌫ Aμ iF̄ μ⌫ [ Aμ , A⌫ ]
1
2iD̄μ A⌫ [ Aμ , A⌫ ]
[ Aμ , A⌫ ][ Aμ , A⌫ ]
(2.60)
2 -->

where we’ve ordered the terms in the action depending on the number of A’s. Note that the middle line is quadratic in A.

## Gauge Fixing and Ghosts

Our plan is to integrate over the fluctuations Aμ in the path integral, leaving ourselves with an effective action for the background field Āμ . 

To do this, we must first deal with the gauge symmetry. While the action of the gauge symmetry on Aμ is clear, there is no unique decomposition into the action on Āμ and Aμ . 

However, the calculation is simplest if we load the full gauge transformation into Aμ , so

<!-- gauge Āμ = 0
and
gauge (
Aμ ) = D̄μ !
i[ Aμ , !] -->

where, for this section alone, we’ve changed our notation for infinitesimal gauge transformations so as not to confuse them with the fluctuating field Aμ . With this choice, Aμ transforms as any other adjoint field.

As usual, field configurations related by a gauge symmetry should be viewed as physically equivalent. 

This is necessary in the present context because the kinetic terms for Aμ are not invertible. For this reason, we first need a way to fix the gauge.

We do this using the Faddeev-Popov procedure that we saw in the lectures on Advanced Quantum Field Theory. We choose to work in the gauge G(Ā; A) = D̄μ Aμ = 0
(2.61)

Note that this gauge fixing condition depends on our choice of background field. This is the advantage of this method; we will find that the gauge invariance of Āμ is retained throughout the calculation.

We add to our action the gauge-fixing term

<!-- Z
1
Sgf = 2 d4 x tr (D̄μ Aμ )2
g
(2.62) -->

The choice of overall coefficient of the gauge fixing term is arbitrary. But nice things happen if we make the choice above. 

To see why, let’s focus on the D̄μ A⌫ D̄⌫ Aμ term in (2.60) . Integrating by parts, we have

<!-- Z
Z
4
μ
⌫
d x tr D̄ A D̄⌫ Aμ =
d4 x tr A⌫ D̄μ D̄⌫ Aμ
Z
⇣
⌘
=
d4 x tr A⌫ [D̄μ , D̄⌫ ] + D̄⌫ D̄μ Aμ
Z
h
i
=
d4 x tr (D̄μ Aμ )2 + i A⌫ [F̄ μ⌫ , Aμ ] -->

The first of these terms is then cancelled by the gauge fixing term (2.62), leaving us
with

<!-- Z
1
1
4
SY M + Sgf = 2 d x tr F̄μ⌫ F̄ μ⌫ + 2F̄ μ⌫ D̄μ A⌫
g
2
+D̄μ A⌫ D̄μ A⌫ 2iF̄ μ⌫ [ Aμ , A⌫ ]
1
[ Aμ , A⌫ ][ Aμ , A⌫ ]
2iD̄μ A⌫ [ Aμ , A⌫ ]
2 -->

and we’re left with just two terms that are quadratic in A.

The next step of the Faddeev-Popov procedure is to implement the gauge fixing condition (2.61) as a delta-function constraint in the path integral. We denote the gauge transformed fields as Ā!μ = Āμ and A!μ = Aμ + D̄! i[ Aμ , !]. We then use
the identity

<!-- ✓
◆
Z
@G(A ̄! , A! )
!
!
D! (G(Ā , A )) det
=1
@! -->

The determinant can be rewritten through the introduction of adjoint-valued ghost fields c. For the gauge fixing condition (2.61), we have:

<!-- ✓
◆ Z
✓
Z
h
i◆
@G(Ā, A! )
1
†
4
† 2
†
μ
det
= Dc Dc exp
d x tr
c D̄ c + ic [D̄ Aμ , c]
@!
g2 -->

where we’ve chosen to include an overall factor of 1/g 2 in the ghost action purely as a convenience; it doesn’t effect subsequent calculations. 

The usual Faddeev-Popov story R tells us that the integration D! now decouples, resulting in a unimportant overall constant.

We’re left with an action that includes both the fluctuating gauge field Aμ
and the ghost field c, S = SY M + Sgf + Sghost ,

<!-- Z
1
1
4
S = 2 d x tr F̄μ⌫ F̄ μ⌫ + 2F̄ μ⌫ D̄μ A⌫
g
2
+D̄μ A⌫ D̄μ A⌫ 2iF̄ μ⌫ [ Aμ , A⌫ ] + D̄μ c† D̄μ c
1
2iD̄μ A⌫ [ Aμ , A⌫ ]
[ Aμ , A⌫ ][ Aμ , A⌫ ] + ic† [D̄μ Aμ , c]
2 -->

As previously, we have arranged the terms so that the middle line is quartic in fluctuating fields, while the final line is cubic and higher. 
