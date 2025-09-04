---
title: "Quantization as an eigenvalue problem"
description: ""
# image: "/covers/sciences.png" 
color: "black"
draft: true
---


The solution of (5) can be worked out (for example) in spatial polar coordinates
r, ϑ, ϕ, by setting ψ as a product of a function of r, a function of ϑ and a function
of ϕ. The method is abundantly known. For the dependence on the polar angles
it comes out a spherical harmonic,3 whereas for the dependence on r — we want
to call χ its function — one easily obtains the differential equation:
(7) d2χ
dr2 + 2
r
dχ
dr +
(2mE
K2 + 2me2
K2r − n(n + 1)
r2
)
χ = 0 .
n = 0, 1, 2, . . . .


The restriction of n to integer numbers is notoriously necessary, so that the depen-
dence on the polar angles becomes single-valued. — We need solutions of (7) that
remain finite for all real, non-negative values of r. Now, equation (7) has4 in the
complex r-plane two singularities, at r = 0 and at r = ∞, of which the second is
an “irregular singular point”5 (an essential singularity)6 of all integrals,7 whereas
the first is not (for no integral). Both these singularities are forming the boundary
points of our real interval. Now, in such case one knows that the requirement
of finiteness for the function χ at the boundary points amounts to a boundary
condition. The equation has in general no integral at all which at both boundary
points stays finite, but such an integral exists only for certain specific values of the
constants which appear in the equation. It is necessary to determine these specific
values.

The fact just pointed out is the salient point in the whole investigation.

We consider first the singular point r = 0. The so-called characteristic equation,8 which determines the behaviour of the integral at this point, is:9
(8) %(% − 1) + 2% − n(n + 1) = 0
with the roots:
(8′) %1 = n , %2 = −(n + 1) .

3Translator’s note: in German, Kugelfl¨achenfunktion. Literally, “spherical surface func-
tion”.
4For the guide to the treatment of equation (7) I am obliged to the greatest gratitude to
Hermann Weyl. For the claims which will not be proved in the following, I refer to L. Schlesinger,
Differential equations (Collection Schubert Nr. 13, G¨oschen, 1900, especially chapters 3 and 5).
5Translator’s note: in German, Stelle der Unbestimmtheit. Literally “location of the indef-
initeness”.
6Translator’s note: in German, wesentlich singul¨are Stelle. Literally, “essential singular
location”
7Translator’s note: “integral”, here and in the following, stands for “solution of the differ-
ential equation” (which, in fact, is an integral).
8Translator’s note: also known as “indicial equation”. In German, determinierende Funda-
mentalgleichung, literally “fundamental determining equation”.
9Translator’s note: in order to find equation (8) one postulates a power series:
χ(r) = r%
∞∑
k=0
ckrk ,
with c0 6 = 0, and substitutes it into equation (7). The coefficient of the lowest power of r is the
characteristic equation. This is generally known as the Frobenius method.
3

The two canonical integrals at this point go then with exponents n and −(n + 1).
Since n is non-negative, only the former integral is useful for us. Since this goes
with the larger exponent, it is represented by a usual power series that starts with
rn. (The other integral, which does not interest us, can contain a logarithm, due
to the integer difference between the exponents.) Since the next singular point lies
only at infinity, the mentioned power series converges continuously10 and represents
an entire transcendental function.11 We thus establish:
The solution we looked for is (a part from an irrelevant constant factor) a
single-valued, specific transcendental function, which at r = 0 goes with exponent
n.
Now, the question is to investigate the behaviour of this function at the infinity
of the positive real axis. To this purpose, we simplify equation (7) by means of the
substitution
(9) χ = rαU ,
in which α is chosen so that the term with 1/r2 cancels out. To this purpose, α
must get one of the two values n, −(n + 1), as one easily verifies. Equation (7)
takes then the form
(7′) d2U
dr2 + 2(α + 1)
r
dU
dr + 2m
K2
(
E + e2
r
)
U = 0 .
Its integrals go at r = 0 with exponents 0 and −2α − 1.12 For the first value of
α, α = n, is the first, for the second value of α, α = −(n + 1), is the second of
these integrals an entire transcendental function and leads via (9) to the sought
after solution, which is certainly single-valued. Therefore, we lose nothing if we
limit ourselves to one of the two values of α. We choose
(10) α = n .
Our solution U goes then at r = 0 with exponent 0. The mathematicians call
equation (7′) a Laplace equation. The general type is
(7′′) d2U
dr2 +
(
δ0 + δ1
r
) dU
dr +
(
ε0 + ε1
r
)
U = 0 .
In our case, the constants have the values
(11) δ0 = 0 , δ1 = 2(α + 1) , ε0 = 2mE
K2 , ε1 = 2me2
K2 .


