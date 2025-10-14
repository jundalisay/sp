---
title: Off the Hamiltonian
weight: 5
author: Hossenfelder
description: ""
c: "firebrick"
---



B. Off the Hamiltonian

We reconcile the product assumption with the canonical quantum gravity evolution by conceding that the time evolution of the product state cannot be a solution to the Schrodinger equation. 

We will further assume that this deviation from the Schrodinger evolution leads to a suppression ¨
of the transition amplitude. 

That is, we allow the evolution of the state in Hilbert space to proceed unitarily1 on any path that
evolves locally and by the known interaction terms, and that
respects all conservation laws, but it needs to fulfil the product
state constraint.

Before we move on, I want to add some words on how to interpret this approach. I have started from the assumption that
we have an underlying fundamental theory that unifies matter
and geometry. This underlying theory has its own dynamical law that, alas, I don’t know. The product state constraint
will not give us the underlying dynamical law. It is rather
a phenomenological model to explain our observation of the
collapse process that will, hopefully, allow us to identify ways
to test the underlying theory.

This is similar to how, in the early days of quantum mechanics, physicists postulated discrete atomic energy levels and a
fractional electron spin just because that agreed with observations, despite not knowing the underlying law. The underlying
laws were then discovered, and the theory developed, from
further studies of the observed phenomena.
It is straightforward to estimate how large the deviation of a
product path |Ψ⟩ from the usual Schrodinger evolution ¨ |Ψ′
⟩ is.

1 This means in particular that states are normalised to 1 as usual.
First we may note that since the product state concerns gravitational degrees of freedom, we expect the product constraint
to only make a difference when quantum gravitational effects
are taken into account. That is, even without doing any calculation, we expect the effect to be small for states with small
masses/energies.
To calculate the deviation, we then define the residual R :=
(i∂t −Hˆ )|Ψ⟩ with respect to the standard Hamiltonian Hˆ (i.e.
the known one of, say, canonical quantum gravity, and not the
unknown Hˆ
u) and use the functional
S :=
Z
dt ||R|| (3)
to integrate the deviation from the Schrodinger evolution, ¨
where, as usual, || · || =
p
⟨·|·⟩.


It will be helpful in the following to decompose the integrand into two components, one that is perpendicular to |Ψ⟩,
that we will call |R⊥⟩, and one that is parallel to it, that we
will call |R∥⟩. We obtain them as usual as projections

|R⊥⟩ = (11 − |Ψ⟩⟨Ψ|)|R⟩ , (4)
|R∥⟩ = ⟨Ψ|R⟩|Ψ⟩ . (5)

Then we have

||R||2 = ||R⊥||2 + ||R∥||2, (6)
||R∥||2 = |⟨Ψ|R⟩|2 . (7)

Since both terms are strictly positive, they must separately
be minimal. The parallel component, however, can always be
set to zero by multiplying |Ψ⟩ by a suitable time-dependent
phase. Suppose we have ⟨Ψe|Re⟩ ̸= 0. Then instead choose

|Ψ⟩ = e −iφ(t) |Ψe⟩, 

where φ˙ = −⟨Ψe|Re⟩, and then you have

⟨Ψ|R⟩ = 0. 

This is sometimes called the “energy gauge.”

The word “gauge” is somewhat misleading in our case,
since the residual actually does depend on this phase, so it
is not a gauge. Still, I will use this term in the following. The
energy gauge is a shortcut to finding the minimum of the functional. One could alternatively just use ||R⊥|| for the functional and assume the energy gauge.

C. Teleology

The biggest shortcoming of Penrose’s argument for gravitationally induced collapse is that once the gravitational self-energy is large enough to make a non-negligible contribution to the time-evolution, it is too late to collapse the
state locally. This problem is common to all decoherencebased approaches, and it is here where superdeterminism
comes in.

Superdeterminism is mathematically defined as a correlation between the measurement settings X and the presumed
to exist hidden variables λ, i.e. ρ(X|λ) ̸= ρ(X), where ρ is
the probability distribution of the hidden variables. However,
as we have argued in [19], what this really means is that the
time-evolution of the underlying state depends on the mea-
D Multipartite and Interacting Systems 3
surement setting: They must fit together. Superdeterminism
is therefore best understood as a constraint on possible evolutions (an all-at-once constraint in the terminology of [20])
or as a superselection rule on possible outcomes of the timeevolution.
One can assume that the outcome of the time evolution is
always a detector eigenstate (as we did in [21]) to get a model
that reproduces quantum physics. But what one really wants
is to explain what outcomes we get and why, and hence how
the classical world emerges. The model presented here will
go a long way towards this.
As argued in [22], the action principle is ideally suited to incorporate a superselection rule because technically it already
depends on both initial and end states. In classical physics,
the action principle is only seemingly teleological, by which
I mean it only seemingly depends on a boundary condition in
the future. This is because we can use the principle of least
action to derive the Euler-Lagrange equations which merely
require initial values, and no future input.
However, the action principle opens a door to formalising
a theory that violates measurement independence by not only
using a variation over all possible paths, but also a variation
over all possible end-states of the paths. Our first step at an
action principle will thus simply be that the time-evolution
which is realised is the one that is (a) a stationary state of
the residual action Eq. (3), δS = 0, and (b) has the minimal
residual among all stationary states given our product ansatz.
This will turn out to be not quite correct, but we will refine it
later on.

D. Multipartite and Interacting Systems

If this model is to describe the measurement
process, then it must deal with macroscopically large systems
that are composed of many particles. We therefore have to
think about how to deal with systems that have multiple components.
Let first consider the case of two non-interacting systems in
a product state |Ψ⟩ = |A⟩ ⊗ |B⟩ with Hamiltonian

Hˆ = HˆA ⊗ 11 + 11 ⊗ HˆB . (8)

The residual is

|R⟩ = |RA⟩ ⊗ |B⟩ + |A⟩ ⊗ |RB⟩ , (9)
where |RA⟩ = (i∂t − HˆA)|A⟩ and |RB⟩ = (i∂t − HˆB)|B⟩.

To fix the phases for the energy gauge, we set ⟨A|RA⟩ =
⟨B|RB⟩ = 0. 

Then

||R||2 = ||RA||2 + ||RB||2. (10)

This expression generalises in the obvious way to any number
of systems: ||R||2 will be a linear sum of the individual contributions. Consequently, the contribution of each can be minimised separately, and for n identical separable subsystems,
||R|| will scale with √ n

If the systems are interacting, we add a term that couples them

Hˆ
int :=
X
k
ˆI
k
A ⊗ ˆI
k
B . (11)
Then we define
⟨V ⟩ := ⟨A|⟨B|Hˆ
int|B⟩|A⟩ , (12)
VˆA := ⟨B|Hˆ
int|B⟩ , (13)
VˆB := ⟨A|Hˆ
int|A⟩ , (14)
|R
′
A⟩ :=

i∂t − HˆA − VˆA + ⟨V ⟩

|A⟩, (15)
|R
′
B⟩ :=

i∂t − HˆB − VˆB + ⟨V ⟩

|B⟩, (16)
Ve := Hˆ
int − VˆA ⊗ 11 − 11 ⊗ VˆB + ⟨V ⟩11 . (17)
In the energy gauge, we then have
||R||2 = ||R
′
A||2 + ||R
′
B||2 + ⟨Ψ|Ve 2
|Ψ⟩ . (18)
That is, the functional for two interacting subsystems is the
deviation of each subsystem from the mean field path, plus a
contribution from the interaction.


E. Generalisations

For simplicity, I used the Newtonian limit and first quantisation, the derivation could be extended to a
generally covariant quantum field theory. This can be done as
usual by replacing the Lagrangian by an integral over density
operators

... (19)

where Nν = (N, Ni) is the lapse/shift vector, Σ is a family
of Cauchy hypersurfaces, and Hˆ
ν is the constraint operator
density [23–25]. 

With that, the functional S becomes a spacetime integral that is by construction a scalar.
That said, general covariance is naturally broken in a typical
quantum experiment by the rest frame of the detector.
