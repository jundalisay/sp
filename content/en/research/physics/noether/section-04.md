---
heading: "Section 4"
title: "Linearly-independent Couplings"
weight: 18
author: Noether
description: "We shall deal with variational problems that admit a continuous group (in the Lie sense)"
c: "firebrick"
---


§ 4. Converse in the case of infinite groups.

First, let us show that the assumption of the linearity of ∆x and ∆u presents no restriction, which one deduces here without the converse from the fact that G∞ρ formally depends upon ρ and only ρ arbitrary functions. Namely, it shows that in the nonlinear case the number of arbitrary functions would increase under the composition of transformations in which the terms of lowest order would add together. In fact, let, say:

<!-- ∂u
∂p


y = A  x, u , ,⋯ ; p  = x + ∑ a(x, u, ...) pν + b(x, u, ...) pν−1
∂x
∂x


ν
 ∂p 
 ∂p 
+ cpν−1   + ... + d   + ...
 ∂x 
 ∂x 
2
and
analogously v
=
∂u


B  x , u , ,⋯ ; p  ,
∂x


(pν = ( p(1) )ν , ..., ( p ( ρ ) )ν ), -->
so under ρ composition with

<!-- z
=


∂v
A  y, v, ,⋯ ; q  , one gets, for the terms of lowest order:
∂y


) ψi = 0, or, more generally, ψi = Ti ψi ,  -->

where Ti are new functions that are to be added to the others,
are referred to as “field equations” in physics. In the case ψi = Ti , the identities (13) go to identities: Div
B(λ) = ∑ Tiδ ui( λ ) , which are also referred to as conservation laws in physics.



As long as f is nonlinear in the κth derivatives.

Otherwise, one would have u′λ = const. for any λ, corresponding to:

<!-- 1
u′′ ⋅ (u′)λ−1 =
1 d
λ dx
λ
(u ′) .Noether – Invariant variational problems
11
2
2

∂p
∂q 

 ∂p 
 ∂q  
z = x + ∑ a(pν + qν) + b  pν −1 + qν −1  + c  pν − 2   + qν − 2    + ...
∂x
∂x 

 ∂x 
 ∂x  
 -->

If a coefficient that is different from a and b here is different from zero then a term

<!-- σ
σ
 ∂p 
 ∂q 
p   + qν −σ    -->


actually appears for σ > 1, so one cannot write this as the
<!--  ∂x 
 ∂x  -->

differential quotient of a single function or products of powers of them; the number of arbitrary functions thus has increased, contrary to assumption. If all of the coefficients that are different from a and b vanish then each of the values of the exponents v1, ..., vρ will be the second term of the differential quotient of the first one (as is always the case for, e.g., a G∞1), such that linearity actually enters in, or else the number of arbitrary functions would also increase here. Due to the linearity of the p(x), the infinitesimal transformations thus satisfy a system of linear partial differential equations, and since the group property is fulfilled, they define an “infinite group of infinitesimal transformations,” by Lie’s definition (Grundlagen, § 10).

One deduces the converse now in a manner that is similar to the one in the case of finite groups. The existence of the dependencies (16) leads, upon multiplication by p(λ)(x) and addition, using the identity conversion (14), to ∑ψ iδ ui = Div Γ, and from ν −σ this, as in § 3, one infers the determination of ∆x and ∆u and the invariance of I under these infinitesimal transformations, which, in fact, depend linearly upon ρ arbitrary functions and their derivatives up to order σ.

The fact that these infinitesimal transformations, when they include no derivatives ∂u / ∂x, ..., certainly define a group follows, as in § 3, from the fact that otherwise more arbitrary functions would appear by composition, while, by assumption, there shall be only ρ dependencies (16); they thus define an “infinite group of infinitesimal transformations.” However, such a thing consists (Grundlagen, Theorem VII, pp. 391) of the most general infinitesimal transformations of a certain “infinite group G of finite transformations,” in Lie’s sense. Every finite transformation will then be generated by infinitesimal ones (Grundlagen, § 7) 1), and thus arise from the integration of the simultaneous system:

<!-- dxi
= ∆xi,
dt
dui
= ∆ui,
dt
 xi = yi

for t = 0  ,

 ui = v
 -->

in which, it can, however, be necessary to choose the arbitrary p(x) to be independent of t.
G thus depends, in fact, on ρ arbitrary functions; in particular, if it suffices to choose
p(x) to be free of t then this dependency will be analytic in the arbitrary functions q(x) = t) From this, it follows, in particular, that the group G that is generated by the infinitesimal transformations ∆x, ∆u of a G∞ρ again leads back to G∞ρ . 


G∞ρ then includes no infinitesimal transformations that are different from ∆x, ∆u that depend upon arbitrary functions, and can also contain none that are independent of them that depend upon parameters, since it would then be a mixed group.
However, from the above, the finite transformations are determined by means of the infinitesimal ones.

p(x) 1). 

If derivatives ∂u / ∂x, ... appear then it can be necessary to add infinitesimal transformations δ u = 0, Div(f ⋅ ∆x) = 0 before one can reach the same conclusion. 

In connection with an example of Lie (Grundlagen, § 7), let a somewhat more general case be given, where one can advance to explicit formulas that likewise show that the derivatives of the arbitrary functions up to order σ appear, from which the converse is then complete.

It is the example of those groups of infinitesimal transformations that correspond to the group of all transformations of the x and the transformations of the u that are “induced” by them; i.e., those transformations of the u for which ∆u, and
consequently u, depend upon only the arbitrary functions that appear in ∆x, whereby let it
be assumed that the derivatives ∂u / ∂x, ... do not appear in ∆u. One thus has:

<!-- ∆xi = p (x),
(i)
(λ )
σ (λ )
 (λ )

(λ )
( λ ) ∂p
(λ ) ∂ p
∆ui = ∑ a ( x, u ) p + b
.
+⋯ + c
σ 
∂x
∂x 
λ =1 
n -->

Since the infinitesimal transformation ∆x = p(x) generates any transformation x = y + g(y) with arbitrary g(y), in particular, p(x) can be determined to be independent of t, such that the following one-parameter group will be generated:

<!-- (18)
xi = yi + t ⋅ gi(y), -->

which goes to the identity for t = 0 and to the desired x = y + g(y) for t = 1. In fact, it
follows by differentiation of (18) that:

<!-- (19)
dxi
= gi(y) = p(i)(x, t),
dt -->

where p(x, t) is determined from g(y) by inversion, and conversely, (18) arises from (19) by means of the auxiliary condition that xi = yi for t = 0, by which, the integral is established uniquely. By means of (18), the x in ∆u can be replaced with the “integration constants” y and t; thus, the g(y) appear up to precisely the σth derivatives when one

<!-- ∂p
∂g ∂yκ
= ∑ -->

and, in general, replaces expresses the ∂y / ∂x in terms of ∂x / ∂y in

<!-- ∂x
∂yκ ∂x
∂σ p
∂g
∂x
∂σ x
with
its
values
in
terms
of
,
...,
,
..., -->

For the determination of the u,

<!-- ∂xσ
∂y
∂y
∂yσ -->

one then gets the system of equations:


<!-- dui
∂g
∂σ g
= Fi  g ( y ), , ⋯ , σ , u , t 
dt
∂y
∂y


1
(ui = vi for t = 0) -->

The question of whether this latter case always occurs was posed by Lie in a different formulation (Grundlagen, § 7 and § 13, conclusion).Noether – Invariant variational problems in which only t and u are variable, but the g(y), ... belong to the coefficient domain, such that the integration yields:

<!-- ∂g
∂σ g 
ui = vi + Bi  v, g ( y ), ,⋯ , σ , t  ,
∂y
∂y

t =1 -->

and therefore transformations that depend upon precisely σ derivatives of the arbitrary functions. From (18), the identity is included in this for g(y) = 0, and the group property follows from the fact that the chosen process produces any transformation x = y + g(y), from which the one that is induced on the u is established uniquely, so the group G will
be exhausted. 

Incidentally, it then follows from the converse that it is no restriction to choose the arbitrary functions to depend upon only the x, but not on the u, ∂u / ∂x, ... In the latter 

<!-- ∂p ( λ )
∂p ( λ )
case, in fact, -->

enter into the identity transformation (14), as well as into

<!-- ∂u
∂u
∂ ,⋯
∂x -->

(15), in addition to the p(λ). If one now chooses the p(λ) to be successively of degree zero, one, ... in u, ∂u / ∂x, ..., with arbitrary functions of x as coefficients, then the dependencies (16) emerge again, but in greater numbers, which, however, from the converse above, lead back to previous case under composition with arbitrary functions that depend upon only x. One likewise shows that the simultaneous appearance of dependencies and divergence relations that are independent of them corresponds to mixed groups 1).

As in § 3, it also follows from the converse here that, along with I, also any integral I* that differs by a divergence likewise admits an infinite group with the same δ u , in which, however, ∆x and ∆u will generally include derivatives of the u. 

Einstein has introduced such an integral into General Relativity in order to obtain a simpler statement of the energy theorem; 

I shall give the infinitesimal transformations that this I* admits, for which I preserve the notation of Klein’s second note precisely. The integral I = ∫...∫ K dw = ∫...∫ K dS admits the group of all transformations of the w and the one that it
induces on gμν ; they correspond to the dependencies ((30), in Klein):

<!-- μν
∑ K μν gτ + 2∑
∂g μτ K μτ
= 0.
∂wσ
∗ -->

Now, one has: I* = ∫...∫ K* dS, where K* = K + Div, and consequently, one will have: K μν = Kμν , where
∗ K μν , Kμν mean the Lagrangian expressions in each case. Therefore, the dependencies that were given are
also true for K μν , and after multiplying by pτ and adding, one gets by the reverse conversion of the product
differentiation:

<!-- ∑ Kμν pμν + 2 Div (∑ gμσ Kμν pτ) = 0,
∗

δK* + Div  ∑ 2 g μσ K μτ pτ −

∂K ∗ μν 
p  = 0.
∂gσμν
 -->

Comparing this with Lie’s differential equation: δK* + Div(K* ∆w) = 0, it then follows that:Noether – Invariant variational problems


