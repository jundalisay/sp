---
title: Appendix
weight: 500
author: Hossenfelder
description: ""
c: "firebrick"
---


I summarise Penrose’s argument and the mean field approach to semi-classical gravity. 

Consider a particle in a superposition of two locations ⃗x1 and ⃗x2. Each has an energy density, ρ1 and ρ2, centred around its position, but the particles are so far apart that their overlap is negligible. We will assume that
each lump of the superposition on its own is to good accuracy
classical and denote their Newtonian potentials as Φ1 and Φ2,
respectively, where ∇2Φ1/2 = 4πGρ1/2.

In approaches like perturbatively or canonically quantized
gravity, the full state will be entangled with the metric,
schematically α1|χ1⟩|g1⟩ + α2|χ2⟩|g2⟩, where |χ1/2⟩ are the
parts of the matter wave-function in either location, and |g1/2⟩
the metrics.

In General Relativity the Newtonian
potential appears as a correction to the time-time component
of the metric tensor gtt ≈ −(1+ 2Φ). Also remember that the
lapse N, which can be said to quantify the passage of time, is
basically N =
√
−g00 ≈ 1 + Φ. We can then estimate the
mismatch between the two time coordinates as δN ∼ (Φ1 −
Φ2) := δΦ. This causes a discrepancy in the local acceleration
of order δa ∼ −∇δΦ.

The important step is now that Penrose interprets this
discrepancy as a measure for the uncertainty in the timeevolution, and not just a difference. He argues that a natural
measure of this uncertainty is the contribution to the gravitational self-energy which is

E (Pen) G := 1 4πG Z d 3x (∇δΦ)2 . (46)

Integrating by parts and discarding the boundary term gives

E (Pen) G = − 1 4πG Z d 3x δΦ(∇2 δΦ) . (47)

We can then insert the non-relativistic propagator

... (48)

and get

... (49)

where δρ := ρ1 − ρ2.

Since Penrose interprets the spread in lapses as an uncertainty, he says that this self-energy mismatch will cause different branches to lose phase-correlations at a timescale of τ ∼ 1/E(Pen) G . 

He then conjectures that “The basic stationary
states into which a general superposition would decay by state
reduction are to be stationary solutions of the Schrodinger- ¨
Newton equation (SN-equation),” ([6], emph orig.) which is
similar to the behaviour we found in the previous subsections.
However, such a decoherence just does not happen in either
canonically or perturbatively quantised gravity. Part of my
reason for writing this paper was to close this gap.
One finds a similar result if one considers the Schrodinger- ¨
Newton equation [38, 39]

... (51)

as a mean-field approximation. How good this approximation
is can be quantified by calculating the variance of the density,
that is, the strength of the quantum fluctuations around the
mean value, where the mean value gives rise to the classical
metric. For this, one replaces ρ with an operator ρˆ that is
acting on the matter state, and defines δρˆ := ˆρ − ⟨ρˆ⟩ (note:
this operator is not the same as the function δρ above), then

...

is the variance and

... (52)

measures the deviations from the mean field approximation.
