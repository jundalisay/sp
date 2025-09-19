---
title: "Quantization as an eigenvalue problem"
description: ""
# image: "/covers/sciences.png" 
color: "black"
draft: true
---


§ 1. In this communication I would like first to show, in the simplest case of the (non-relativistic and unperturbed) hydrogen atom, that the usual prescription for quantisation can be substituted by another requirement in which no word about “integer numbers” occurs anymore. 

Rather, the integerness1 emerges in the same natural way as, for example, the integerness of the number of knots of a vibrating string. The new interpretation is generalisable and touches, as I believe, very deeply the true essence of the quantisation prescription.

The usual form of the latter is tied to the Hamiltonian partial differential equation:

(1) H
(
q, ∂S
∂q
)
= E .

It is looked for a solution of this equation that appears as a sum of functions, each
of only one of the independent variables q.
We introduce now in place of S a new, unknown function ψ in such a manner
that ψ would appear as a product of suitable functions of the single coordinates.

That is, we set:

(2) S = K lg ψ .
The constant K must be introduced for dimensional reasons and it has the dimen-
sion of an action. With this one obtains:

(1′) H
(
q, K
ψ
∂ψ
∂q
)
= E .

We do not look now for a solution of equation (1′), but we stipulate the following requirement. Neglecting the variability of the masses, or considering it at least as long as the single electron problem is concerned, equation (1′) can always be brought
to the form: a quadratic form for ψ and its first derivatives = 0. We look for such 

(1926): 361-376. Translated by Oliver F. Piattella. E-mail: oliver.piattella@cosmo-ufes.org
1Translator’s note: I have translated here Ganzzahligkeit as “integerness”, meaning ”the
property of a number being integer”.

real, single-valued in the whole configuration space, finite and twice continuously
differentiable functions ψ, which make to an extremum the integral, extended over
the whole configuration space, of the just mentioned quadratic form2). With this
variation problem we substitute the quantum conditions.

First of all, we will take for H the Hamiltonian function of the Keplerian motion
and show that the established requirement is satisfiable for all positive, but only
for a discrete set of negative, values of E. That is, the mentioned variation problem
has a discrete and a continuous spectrum of eigenvalues. The discrete spectrum
corresponds to the Balmer terms, whereas the continuous one corresponds to the
energies of the hyperbolic orbits. In order for numerical agreement to exist, K
must get the value h/2π.

Since for the arrangement of the variation equations the choice of coordinates
is of no importance, we choose the right-angled Cartesian ones. 

Then, in our case,

(1′) reads (e, m are the electron charge and mass):
(1′′)
(∂ψ
∂x
)2
+
(∂ψ
∂y
)2
+
(∂ψ
∂z
)2
− 2m
K2
(
E + e2
r
)
ψ2 = 0 .
r = √x2 + y2 + z2 .
And our variation problem reads:
δJ = δ
∫ ∫ ∫
dxdydz
[(∂ψ
∂x
)2
+
(∂ψ
∂y
)2
+
(∂ψ
∂z
)2
(3)
−2m
K2
(
E + e2
r
)
ψ2
]
= 0 ,
with the integral extended over the whole space. One finds from this, in the usual
way:
(4) 1
2δJ =
∫
df δψ ∂ψ
∂n −
∫ ∫ ∫
dxdydzδψ
[
∆ψ + 2m
K2
(
E + e2
r
)
ψ
]
= 0 .
It must then be, firstly, that
(5) ∆ψ + 2m
K2
(
E + e2
r
)
ψ = 0 ,
and, secondly, the integral to be extended over the infinitely far closed surface must
be
(6)
∫
df δψ ∂ψ
∂n = 0 .
(It will turn out that because of the latter requirement we have to supplement our
variation problem with still a requirement over the behaviour of δψ at infinity, so
that also the above claimed continuous spectrum actually exists. But, later about
that.)
2It doesn’t escape to me that this formulation is not completely unambiguous.
2
