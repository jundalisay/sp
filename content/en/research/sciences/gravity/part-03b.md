---
title: Born’s Rule
weight: 50
author: Hossenfelder
description: ""
c: "firebrick"
---



### C. Born’s Rule

Superdeterministic theories are hidden variables theories.
This means they explain the seeming randomness of quantum
mechanics as due to our lack of information about variables λ
which do not appear in standard quantum physics. To recover
a probabilistic theory, therefore, we must now incorporate the
hidden variables.

For this, we will assume that the probability of a prepared
state to go from an initial state |Ψs⟩ := |Ψ(ts)⟩ into an end
state |Ψe⟩ := |Ψ(te)⟩ is determined by random variables
X(|Ψs⟩, |Ψe⟩, λ), which are, to a good approximation, independent for each possible end-state. The end state into which
the initial state evolves is that with the smallest X.

We define the random variables so that they have rate (inverse mean value)

r(|Ψs⟩, |Ψe⟩) := e −2A(|Ψs⟩,|Ψe⟩), (31)

where

<!-- A(|Ψs⟩, |Ψe⟩) := Z te
ts
dtp
⟨R|R⟩
p
1 − |C(t)|
2/|C(t)| ,
C(t) := |⟨Ψ
′
|Ψ⟩| ,  -->
... (32)

and so that the probability distribution has maximum entropy, which means it is given by

<!-- ρ(λ|r) = 
re−rλ for λ ≥ 0
0 for λ < 0 -->
... (33)

This distribution depends on the end state |Ψe⟩ via r and hence
on the measurement settings and thereby violates measurement independence.
To understand this expression, we note that for the rotation
in section II C, we have C(t) = cos(θ(t) − θs) , so that

<!-- A =
Z π/2
θs
dθ sin(θ − θs)
cos(θ − θs)
= − ln(sin(θs)) = − ln |α2| ,  -->

... (34)

and hence r = |α2|
2
.

In the case of the enforced product state of section II B we have instead

<!-- C(t) = |α
2
1α
′
1
∗ + α
2
2α
′
2
∗
|  -->

... (35)

Its absolute value generically gives a correction of order one.
That is, by order of magnitude we get

A ∼ τm|Φ12| , (36)

where τ is the time that the superposition remains in existence.
To move on, we define ∆t = te − ts and |Ψ′

<!-- e
⟩ :=
e
−iH∆t
|Ψs⟩  -->

as the final state under the Schrodinger evolution. 

We have previously seen that if the final state is to good
accuracy a product state of metric and matter it can serve as a
measurement eigenstate. We will denote these states as |ΨI ⟩,

<!-- I ∈ {1, 2 . . . D}, and αI
:= ⟨ΨI |Ψ′
e
⟩. -->

Let us then look at the case with two final states |Ψe1⟩ and
|Ψe2⟩. We want to know what is the probability that we get the
final state |Ψe1⟩. By assumption this will be the case whenever
X(|Ψs⟩, |Ψe1⟩, λ1) < X(|Ψi⟩, |Ψe2⟩, λ2) , (37)

that is, the values have to fulfill the condition λ1 < λ2.

We can then calculate the probability of this happening by
integrating over the probability distributions

<!-- P(X(|Ψs⟩, |Ψe1⟩, λ1) < X(|Ψs⟩, |Ψe2⟩, λ2)) =
r1r2
Z ∞
0
dλ1
Z ∞
λ1
dλ2 e
−r1λ1−r2λ2 -->

.. (38)

where r1 and r2 are the rates associated with end state 1 and
2, respectively. The result of this integral is

<!-- r1
r1 + r2
=
e
−2A(|Ψs⟩,|Ψe1⟩)
e−2A(|Ψs⟩,|Ψe1⟩) + e−2A(|Ψs⟩,|Ψe2⟩) -->

... (39)

We see that if the end state |Ψe1⟩ is that of the usual
Schrodinger evolution but not a product state, then the prob- ¨
ability is exponentially suppressed. We hence never observe
these outcomes. The best possible path is one with a sudden
branch rotation. In this case P = |α1|
2
for the state to go to
end state |Ψ1⟩, which is what Born’s rule requires.
Do the probabilities come out correctly for arbitrary numbers of |ΨI ⟩, I ∈ {1, 2, . . . D}? Yes, they do. One can confirm this the hard way by actually calculating the integral for
D probability distributions. But we can make it simpler by
denoting PI := P(|Ψe⟩ = |ΨI ⟩). It follows from the above that

|αI | 2 |αI | 2 + |αJ | 2 = PI PI + PJ ∀ I ̸= J . (40)

Since this equation is trivially also true for I = J, we get

|αI | 2 |αJ | 2 = PI PJ ∀ I, J . (41)

And because both the PI and the |αI |

sum up to 1, we have

1 = X D I=1 PI = PJ |αJ | 2 X D I=1 |αI | 2 = PJ |αJ | 2 . (42)

So, PJ = |αJ | 2 ∀ J.

We also see that since the integral in A is additive and in
the exponent, the probabilities of consecutive local rotations
will factorise, as they should.

The probability distribution of the hidden variables (33) appears
like a bunny out of a magic hat rather than following from anything in particular. This is entirely true, but absent an underlying theory really the best I can do is to provide an example for
the probability distribution that reproduces quantum mechanics3

For what I am concerned, it doesn’t pop any more out
of the hat than Born’s rule pops in the standard formulation of
quantum mechanics. Of course one hopes that eventually one
would be able to derive this (or some other) expression from
some deeper theory, but we will leave this to future work. . .
A second question one might have is why I introduced both
S and A and not just used A for both purposes. The reason is
not only that this doesn’t make physical sense, it doesn’t work.

S is the functional whose variation determines the possible
paths that the system can take. A is a statistical measure that
counts paths in the presumed to be underlying theory. They
should not be the same. Worse, if we set them to be the same,
we would run into the problem that δA = A = 0 on any path
of the form e

iφ(t) |Ψ′ ⟩, φ(t) ∈ R.

That is, we would lose the
usual Schrodinger evolution as a unique solution in the case ¨
when gravity can be neglected.

Another question one might have here is how this can possibly reproduce Born’s rule if there are other time evolutions
from the initial to the final state that we could realise with
local interactions even disregarding gravity. To be concrete,
consider a Mach-Zehnder interferometer. Under the usual
Schrodinger evolution, the state goes in a superposition over ¨
both paths, and then recombines. But we could alternatively
use a local rotation at the first beam splitter to either one of
the paths, and then another local rotation on the second beam
splitter into the wrong port. Why does this not happen?
The reason this cannot happen is that such a path would
not be a stationary solution of S. As long as the outcome of

<!-- 3 And that, as we may note, does not require finetuning, thus providing another counterexample to the claim that superdeterministic theories are finetuned. -->

the usual Schrodinger evolution is a detector eigenstate, the ¨
product state constraint does nothing and the usual solution
of the Schrodinger equation is the optimal path. It is only ¨
when the forward evolution of the Schrodinger solution is not ¨
a product state between matter and geometry that the product
states become the stationary solutions.

In case you noticed that (35) could be equal to zero for
α1/2 = α
′
1/2
, |α1| = |α2| =
p
1/2, and a suitably chosen
phase, do not worry. This path is not stationary since any
nudge towards smaller |α1| or |α2| will decrease the residual,
and there always must be a local path for this, since otherwise the state that we actually measure could not come about
locally. 

That is, it was somewhat unnecessary to include this
case here. However, it will make it easier to interpret the mathematics, which we turn to next.
