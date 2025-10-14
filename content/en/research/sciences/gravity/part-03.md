---
heading: Part 3
title: MODEL PROPERTIES
weight: 5
author: Hossenfelder
description: ""
c: "firebrick"
---


Having formulated the mathematical framework of the new
model, I now want to explain what it is good for.

A. The Penrose Case

The case I want to look at first is one in which we generate
a particle of mass m and with wavefunction |χ⟩ in a superposition of two places (in the following called branches), ⃗x1 and
⃗x2 that we will call |χ1⟩ and |χ2⟩. That is, the wavefunction
of the particle is |χ⟩ = α1|χ1⟩ + α2|χ2⟩.

A The Penrose Case 4

Strictly speaking, the particle’s wavefunction in each location has its own gravitational field. For simplicity, we will
use the Newtonian limit, in which the branches each have
their own Newtonian potential Φ1 and Φ2, or corresponding
quantum states |Φ1⟩ and |Φ2⟩, respectively. We will also assume that the wave-packets do not overlap, so they are orthogonal, that each branch separately is to good approximation classical. This is the common setup used for example in
[5]. I will also assume that the branches are so far apart that

Φ1(⃗x2) ≈ Φ2(⃗x1) ≈ 0.

Please do not think of the particles as point-like as that will
cause singular gravitational potentials. Better think of them as
suitably smeared-out coherent states.

The usual quantum gravitational evolution will generate an
entangled state of the form

...

which we assume to satisfy the Schrodinger equation ¨
of canonical quantum gravity, whereas our product state
schematically has the form

|Ψ⟩ = (a1(t)|χ1⟩ + a2(t)|χ2⟩) (a1(t)|Φ1⟩ + a2(t)|Φ2⟩) (21) ,

and fulfils the Schrodinger evolution in whatever is the under- ¨
lying theory.

We can then estimate S as follows. First we assume, as Penrose in his argument [5], that we have gauge-fixed the metrics
of the different branches. This means in practice that we can
express them both as functions of the same coordinate system, and we can compare them pointwise. In general, this is a
complicated procedure, but for two wave-packets that are each
approximately classical, we will just be left with one Newtonian potential focused on the position of the first particle, and
one focused on the other particle.

Since |Ψ′⟩ evolves under the usual Hamiltonian, each
branch has a slightly different time evolution stemming from
the slightly different lapse functions which stem from the different Newtonian potentials. This means that each branch
picks up a different phase that we can write as

... (22)

where we have discarded an overall phase from the mass as
it’s the same on both branches. In this expression, α′ 1 and α ′ 2 are constant, and the time-dependence has entirely moved into
the phases.

For our product state, we will use the same coefficients
α1 = α
′
1
and α2 = α
′
2

to preserve the weights, but we
note that the phases pick up a factor 1/2 from the doubling
procedure, see Eq. (2). If we expand |Ψ⟩, then the two unmixed factors |χ1⟩|Φ1⟩ and |χ2⟩|Φ2⟩ will solve the canonical
Schrodinger equation. The residual is therefore schematically ¨
of the form

|R⟩ = m α1α2 exp (−i t m Φ12/2)Φ12
× (|χ1⟩|Φ2⟩ + |χ2⟩|Φ1⟩) /2 , (23)

where Φ12 = Φ1(⃗x1) + Φ2(⃗x2). 

From this we get
p
|⟨R|R⟩| =
1
2
m|α1α2||Φ12|
√
2 . (24)

However, this is not the minimal value of the functional
S because |Ψ⟩ is not in the energy gauge. Integrating φ˙ =
⟨Ψ|R⟩, we get φ = tm|α1α2|
2
|Φ12|, and so the minimal norm

becomes
p
|⟨R|R⟩| =
1
2
m|α1α2||Φ12|
p
2 − 4|α1α2|
2 . (25)
The value of the square root in Eq. (25) is ∈ [1,
√
2] and just
makes an order-one correction. Since |α1| =
p
1 − |α2|
2 we

see that, as expected, the residual vanishes if one has only one
branch, because no entanglement is created. The only other
case when the expression vanishes is when the gravitational
potentials are both identical to zero.

Most importantly, we see that parametrically this expression is similar to the estimate for (the inverse of) Penrose’s
decoherence time. However, the residual does not scale with
the variance of the potentials ∆Φ, as one might expect from
a mean-field approach. Rather it scales with the sum of potentials in each locations. For the interested reader, in the Appendix, I summarise Penrose’s calculation and the mean field
approach for comparison.

One can rightfully question the details of this argument.
The product state might not actually have this form or its time
evolution not actually proceed this way. However, this little
calculation serves as an estimate for what one generally expects. To maintain a product state, the time evolution in the
underlying theory will constantly oscillate into mixed terms
(|χ1⟩|Φ2⟩ , |χ2⟩|Φ1⟩) with an oscillation frequency determined by m|Φ12|. Since we are integrating over the absolute
value of the residual, these oscillations will not average out
but rather add up over a time τ , and increase as S ∼ τm|Φ12|.
I will in the following refer to this estimate as the “Penrosephase”.
We will now turn to the question of what to do with this
estimate.

B. The Collapse

Since the integrand of Eq. (3) is strictly positive, it is clear
that the absolute minimum of the action is equal to zero. This
is the case iff the time evolution follows the Schrodinger equa- ¨
tion. The estimate in the previous section then tells us that the
Schrodinger evolution is a good approximation, so long as the ¨
time-integral over the gravitational self energy is small. In this
case, the product requirement will not make much of a difference. This is what one expects given that it affects only the
gravitational sector.

However, if we consider a situation in which the state is
measured (otherwise, what are we to predict?), then the different branches of the wavefunction will become amplified by
the detector. This is what makes a detector a detector: It correlates a quantum state with increasingly more other particles,

B The Collapse 5
so that we can eventually read out the result. This means that
the total mass that is in a superposition of two places will increase due to the measurement.
Consider for example that we create a superposition of a
photon with a beam splitter and then measure the photon with
a photomultiplier. In branch 1, the photon will create a cascade of electrons in photomultiplier 1, whereas photomultiplier 2 remains untouched. For the photon on branch 2, it
is instead electrons in photomultiplier 2 that move. Eventually these electrons will create a current and text on a screen
that will be read by a human. As that happens, the total mass
and energy in a superposition of two locations increases. This
is sometimes called a “Schrodinger’s cat state” or just a “cat ¨
state”.

**The relevant distinction is not that between detector 1 and detector 2.** 

It is rather that between
detector 1 that has detected a particle and detector 1 that has
not detected a particle, and similar for detector 2. Let me
denote the states of the detector on branch 1/2 with |Don
1/2
⟩
and |Doff
1/2
⟩. Then we start with the (matter) state
|Doff
1
⟩|Doff
2
⟩(α1|χ1⟩ + α2|χ2⟩) , (26)
and end with the entangled state
α1|Don
1
⟩|Doff
2
⟩|χ1⟩ + α2|Doff
1
⟩|Don
2
⟩|χ2⟩ . (27)

The total final state will then be a product state with the corresponding state of the geometry that is now also entangled,
albeit only internally and not with the matter. The differences
in potential then come from the different locations of particles
in the on/off states of the detector.
Importantly, since this is an entangled state, for identical
particles, the total size of the effect does not scale with the
square root of the number of particles, it scales linearly. This
makes sense intuitively because this is how the gravitational
potential scales. Note that the particles in each detector do
not need to be a coherent state for this scaling. However, for
the estimate in the previous subsection to hold, the particles
in either branch need to be dislocated enough so that their
wavefunctions no longer overlap.

Our action principle now must take into account the detector. We then see immediately that any state that will be
measured which is not to good approximation in one location
(and hence has approximately a classical gravitational field),
will generate a very large residual once it hits the detector.
This means that if we take into account the amplification by
the detector, then the only local time evolutions for which the
Schrodinger equation is a good approximation is one in which ¨
the measurement outcome does not create macroscopic superpositions, in the quantifiable sense that the time-integral over
the residual (3) remains negligible.

What will happen instead? For this we have to answer the
question of what is the end state of the time evolution of the
product state that results in the smallest residual. We have
partly answered this question already: The residual will accumulate on any time evolution that is in a superposition of
two locations. The more mass (or energy) is in this superposition, the faster it will accumulate. To keep the residual small,
a more optimal time evolution is hence one that only briefly
(and locally!) violates the Schrodinger evolution. This will ¨
also make a contribution to the residual, but it will no longer
accumulate over time.

This is particularly obvious in our example with the beam
splitter. If we measure the photon’s path after the beam splitter this would create a macroscopic superposition with a large
residual. We would expect that the case in which the photon
briefly violates the Schrodinger evolution at the beam split- ¨
ter and locally “collapses” into just one arm gives a smaller
residual.

What will this residual be? To estimate this we can forget
about the specifics of the gravitational sector and its Hamiltonian as it is a general question of going off the Schrodinger ¨
evolution. Let us just generally consider the case with two
branches and a superposition
|Ψ
′
⟩ = α1|1⟩ + α2|2⟩ . (28)

We will assume that both |1⟩ and |2⟩ fulfil the Schrodinger ¨
equation and wlog Im(α1) = 0 , α1 ≥ 0.
We then want to know what is the residual for the timedependent (unitary) rotation into branch 2
|Ψ
′
(t)⟩ = cos(θ(t))|1⟩ + e
iφ
sin(θ(t))|2⟩ , (29)
where θ(t) is a monotonically increasing function of t,
cos(θ(ts)) := α1, e
iφ sin(θ(ts)) := α2, φ ∈ R, θs
:= θ(ts) ≤
π/2, and cos(θ(te)) = 0 for some start time ts and final time
te. This ansatz is already in the energy gauge, so we get
p
|⟨R|R⟩| = ˙θ , (30)
and thus S = π/2 − θs.

There are two things worth pointing out about this expression. First, it does not depend on how fast θ(t) evolves, it
only depends on the beginning and end value. However, in
general such a transition can only proceed locally if it happens within an interaction region. Second, this is the smallest
possible value that the action can take on for any such transition because we can always choose the basis vectors so that
we have a two-state system, and this rotation is the shortest
path between the start and end point.
Why does the state not collapse once the superposition
reaches the detector? Because there is no local interaction
which can make this happen. If the particle really were to go
several paths but upon measurement was found on only one
path, then its mass (and/or energy) would be spread over several places upon arrival at the detector, and it would have to
suddenly jump to only one place, violating local energy conservation.2
2 This problem persists if one slowly collapses the superposition on the way
to the detector, as we did in [21]. Such a model can be locally causal in
Bell’s sense if one is only concerned with the measurement outcome, but
generically it still has to propagate energy densities outside the lightcone.

C Born’s Rule 6

What this means is that if the system minimises the action,
it will locally collapse into a branch that results in a measurement outcome which is to good accuracy a product state
between matter and metric, and pick the branch that had the
largest amplitude under the Schrodinger evolution. We can ¨
therefore identify these product states as the pointer states of
the measurement device. When I say they are product states,
I do not mean they need to be exact product states. They just
need to be close enough to product states so that the Penrosephase remains ≪ 1.
The example that we used in subsection III A was that of
a position-state measurement. However, the model presented
here works for any measurement variable. It only matters that
the detector amplifies the state to macroscopic size. Suppose,
for example, that we measure an energy eigenstate rather than
a position eigenstate. Different energy eigenstates might go
the exact same path and hit the detector at the same location.
The difference in the gravitational potentials will then come
from the necessarily distinct detector response that must eventually reach a macroscopic level, not from having detectors in
different locations.
The only problem is that this, of course, is not what we actually observe. In reality, the outcome of a quantum measurement is not always the pointer state with the largest amplitude.
What is missing here is a probabilistic element. We will turn
to this next.

