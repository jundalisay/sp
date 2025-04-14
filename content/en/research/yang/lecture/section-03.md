---
heading: Section 3
title: "Gauge Symmetry"
description: "The algebra g has many different representations R"
image: "/covers/yang.png"
# icon: /icons/xeno.png
weight: 6
---



## 2.1.2 Gauge Symmetry

The action (2.8) has a very large symmetry group. These come from spacetime-dependent functions of the Lie group G, ⌦(x) 2 G

The set of all such transformations is known as the gauge group. Sometimes we will be sloppy, and refer to the Lie group G as the gauge group.

But strictly speaking, it is the much bigger group of maps from spacetime into `G`. 

The action on the gauge field is

...
<!-- Aμ ! ⌦(x)Aμ ⌦ 1 (x) + i⌦(x)@μ ⌦ 1 (x)

(2.11) -->

A short calculation shows that this induces the action on the field strength

...
<!-- Fμ⌫ ! ⌦(x) Fμ⌫ ⌦ 1 (x)

(2.12) -->

The Yang-Mills action is then invariant by virtues of the trace in (2.8).

In the case that `G = U` (1), the transformations above reduce to the familiar gauge transformations of electromagnetism. 

In this case we can write `⌦ = ei!`` and the transformation of the gauge field becomes `Aμ ! Aμ + @μ !`.

Gauge symmetry is poorly named. It is not a symmetry of the system in the sense that it takes one physical state to a different physical state. 

Instead, it is a redundancy in our description of the system. This is familiar from electromagnetism and remains true in Yang-Mills theory.

There are a number of ways to see why we should interpret the gauge symmetry as a redundancy of the system. 

Roughly speaking, all of them boil down to the statement that the theory fails to make sense unless we identify states related by gauge transformations.

This can be see classically where the equations of motion (2.9) and (2.10) do not uniquely specify the evolution of `Aμ`, but only its equivalence class subject to the identification (2.11). 

In the quantum theory, the gauge symmetry is needed to remove various pathologies which arise, such as the presence of negative norm states in the Hilbert space. 

A more precise explanation for the redundancy comes from appreciating that Yang-Mills theory is a constrained system which should be analysed as such using the technology of Dirac brackets. We will not do this here.

Our best theories of Nature are:
- electromagnetism
- Yang-Mills
- general relativity

Each is based on an underlying gauge symmetry. The idea of gauge symmetry is clearly something deep. 

Yet it is, at heart, nothing more than an ambiguity in the language we chose to present the physics? 

Why should Nature revel in such ambiguity?

There are 2 reasons why it is advantageous to describe Nature in terms of a redundant set of variables.

1. Gauge symmetry means that our presentation of the physics is redundant, it appears to be by far the most concise presentation.

For example, we will shortly describe the gauge invariant observables of Yang-Mills theory. They are called “Wilson lines” and can be derived from the gauge potentials `Aμ`.

Yet presenting a configuration of the Yang-Mills field in terms of a complete set of Wilson lines would require vastly more information specifying the 4 matrix-valued fields `Aμ`.

2. The redundant gauge field allows us to describe the dynamics of the theory in a way that makes manifest various properties of the theory that we hold dear, such as Lorentz invariance and locality and, in the quantum theory, unitarity. 

This is true even in Maxwell theory: the photon has 2 polarisation states. 

Yet try writing down a field which describes the photon that has only 2 indices and which transforms nicely under the SO(3, 1) Lorentz group; its not possible. 

Instead we introduce a field with 4 indices – Aμ – and then use the gauge symmetry to kill two of the resulting states. 

The same kind of arguments also apply to the Yang-Mills field, where there are now two physical degrees of freedom associated to each generator T a.

The redundancy inherent in the gauge symmetry means that only gauge independent quantities should be considered physical. 

These are the things that do not depend on our underlying choice of description. 

In general relativity, such objects are “coordinate independent”.

In Yang-Mills theory, the “electric field” Ei = F0i and the “magnetic field” Bi = 12 ✏ijk Fjk are not gauge invariant as they transform as (2.12).

This is in contrast to electromagnetism where electric and magnetic fields are physical objects. 

Instead, if we want to construct gauge invariant quantities we should work with traces such as tr Fμ⌫ F⇢ or the Wilson lines that we will describe below. 

Note that, for simple gauge groups such as SU (N ), the trace of a single field strength vanishes: tr Fμ⌫ = 0.)

Before we proceed, it’s useful to think about infinitesimal gauge transformations. To leading order, gauge transformations which are everywhere close to the identity can be written as

```
⌦(x) ⇡ 1 + i! a (x)T a + . . .
```

The infinitesimal change of the gauge field from (2.11) becomes

```
Aμ = @μ !
i[Aμ , !] ⌘ Dμ !
```

where ! = ! a T a . Similarly, the infinitesimal change of the field strength is

Fμ⌫ = i[!, Fμ⌫ ]

Importantly, however, there are classes of gauge transformations which cannot be deformed so that they are everywhere close to the identity.

We will study these in Section 2.2.

