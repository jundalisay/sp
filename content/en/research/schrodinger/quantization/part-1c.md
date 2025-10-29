---
title: "Quantization as an eigenvalue problem"
description: ""
# image: "/covers/sciences.png" 
color: "black"
draft: true
---



This type of equation is relatively easy to handle for the reason that the so-called Laplace transform, which in general results again in an equation of second order, leads here to the first order, which is solvable through quadrature. This allows
for a representation of the solution of (7′′) even through integrals in the complex
plane. 

<!-- 10Translator’s note: in German, best¨andig konvergieren.

Translator’s note: the function is “entire” because it has no singularities, except that at
infinity, and it is “transcendental” because it is not a polynomial.

Translator’s note: In order to see this, one calculates again the characteristic equation. -->



I quote here the final result only.13) The integral

... (12) 

<!-- U =
∫
L
ezr(z − c1)α1−1(z − c2)α2−1dz -->

is a solution of (7′′) for an integration path L for which

... (13)

<!-- ∫
L
d
dz [ezr(z − c1)α1 (z − c2)α2 ] dz = 0 . -->\

The constants c1, c2, α1, α2 have the following values. c1 and c2 are the roots of the quadratic equation:

... (14) 

<!-- z2 + δ0z + ε0 = 0 -->

and

<!-- (14′) α1 = ε1 + δ1c1

c1 − c2
, α2 = ε1 + δ1c2
c2 − c1 -->


In the case of equation (7′), one has then, according to (11) and (10)

... (14′′)
<!-- 


c1 = +
√−2mE
K2 , c2 = −
√−2mE
K2 ;
α1 = me2
K√−2mE
+
+ n + 1 , α2 = − me2
K√−2mE
+
+ n + 1 .
 -->

The integral representation (12) allows not only to oversee the asymptotic behaviour of the general solution15 when r goes to infinity in a certain way, but also to give this behaviour for a specific solution, which is always much harder.

We want now, first of all, to exclude the case in which α1 and α2 are real,
integer numbers. When this happens, it happens always at the same time for both
the two quantities and indeed in the case, and only in the case, when
(15) 

... 

real integer number .

Therefore, we suppose that (15) is not satisfied.

The behaviour of the general solution for r going to infinity in a certain manner
- we want always think of r going to the real, positive infinite - is thereupon16)
characterised by the behaviour of the two linearly independent solutions which are
obtained via the following two specifications of the integration path L and that we
13cf. L. Schlesinger, loc. cit. One owes the theory to H. Poincar´e and J. Horn.

14Translator’s note: I put in the appendix the derivation of equation (12).

15Translator’s note: I have employed the terminology “general solution” for the translation of the German Gesamtheit von L¨osungen, which literally translates as “totality of the solutions”. 

When (15) is satisfied, at least one of the two integration paths described in the text becomes
unusable, since it delivers a vanishing result.

want to dub U1 and U2. Let, for both instances, z come from infinity and go back
there on the same path, and indeed in a direction such that

<!-- (16) lim
z=∞ ezr = 0 , -->

i.e. the real part of zr should become negative infinite. Hereby condition (13) is
satisfied. In between, let in one case (solution U1) the point c1, whereas in the
other case (solution U2) the point c2, be circulated, each once.

These two solutions are now asymptotically (in the sense of Poincar´e) repre-
sented, for very large real positive values of r, by

<!-- (17)
{ U1 ∼ ec1rr−α1 (−1)α1 (e2πiα1 − 1) Γ(α1)(c1 − c2)α2−1 ,
U2 ∼ ec2rr−α2 (−1)α2 (e2πiα2 − 1) Γ(α2)(c2 − c1)α1−1 , -->

where we content ourselves here with the first term of the asymptotic series, which
goes on with negative integer powers of r.
We have now to distinguish the two cases E ≷ 0.

Let it first be

1. E > 0. 

We note first that hereby the non-satisfaction of (15) is guaranteed
by the very fact that this quantity is purely imaginary. Further, according to
(14′′) also c1 and c2 becomes purely imaginary. The exponential functions in (17)
are then, since r is real, finite periodic functions. The values of α1 and α2 show,
according to (14′′), that U1 and U2 both go to zero as r−n−1. The same must hold
true also for our entire transcendent solution U , whose behaviour we look for, as
it can always be built as a linear combination of U1 and U2. Further, (9) shows,
considering (10), that the function χ, i.e. the entire transcendent solution of the
originally existing equation (7), still goes to zero as 1/r, since it emerges from U
via multiplication with rn. We can therefore claim:

The Eulerian differential equation (5) of our variational problem has for each
positive E solutions which in the whole space are single-valued, finite and continu-
ous and go to zero at infinity as 1/r with steady oscillations. - It will have to be
discussed yet about the surface condition (6).

