---
title: "Baryon acoustic oscillations (BAO)"
description: ""
# image: "/covers/piketty.jpg"
weight: 82
draft: true
---



These Baryon acoustic oscillations (BAO) measurements use over 5.7 million unique galaxy and quasar redshifts in the range 0.1 < z < 2.1. 

Divided by tracer type, we utilize:
- 300,017 galaxies from the magnitude-limited Bright Galaxy Survey with 0.1 < z < 0.4
- 2,138,600 Luminous Red Galaxies with 0.4 < z < 1.1
- 2,432,022 Emission Line Galaxies with 0.8 < z < 1.6
- 856,652 quasars with 0.8 < z < 2.1,
- over a ∼ 7, 500 square degree footprint. 

The analysis was blinded at the catalog-level to avoid confirmation bias. 

All fiducial choices of the BAO fitting and reconstruction methodology, as well as the size of the systematic errors, were determined on the basis of the tests with mock catalogs and the blinded data catalogs. 

We present several improvements to the BAO analysis pipeline, including enhancing the BAO fitting and reconstruction methods in a more physically-motivated direction, and also present results using combinations of tracers.

We employ a unified BAO analysis method across all tracers. We present a re-analysis of SDSS BOSS and eBOSS results applying the improved DESI methodology and find scatter consistent with the level of the quoted SDSS theoretical systematic uncertainties. 

With the total effective survey volume of ∼ 18 Gpc3, the combined precision of the BAO measurements across the six different redshift bins is ∼0.52%, marking a 1.2-fold improvement over the
previous state-of-the-art results using only first-year data. We detect the BAO in all of these six redshift bins. 

The highest significance of BAO detection is 9.1σ at the effective redshift of 0.93, with a constraint of 0.86% placed on the BAO scale. We find our measurements are systematically larger than the prediction of the Planck 2018-ΛCDM at z < 0.8. We translate the results into transverse comoving distance and radial Hubble distance measurements, which are used to constrain cosmological models in our companion paper



7.5 BAO measurements from the combined tracers
There are several redshift ranges in which more than one DESI target class substantially
overlaps. Over 0.8 < z < 1.1, LRGs, ELGs, and QSO overlap, and over 1.1 < z < 1.6,
ELGs, and QSO overlap. In particular, over 0.8 < z < 1.1, LRG3 and ELG1 are expected
to have comparable densities for DESI Y5 and there is a compensatory crossing of the two
populations within this redshift range. As both tracers probe the same volume, the two BAO
constraints would be highly covariant on large scales, providing a test for consistency in the
tracer-independent parameter, such as post-reconstructed BAO locations. Although we have
estimated the tracer-dependent systematics on BAO in Section 5.2 within a reasonable (or
limited, depending on a view) range of the HODs for each tracer, these overlapping tracers
provide an utmost test of the tracer dependence.
When combining the two BAO constraints we must account for this cross-covariance,
either using a set of large mocks in which both tracers are present or with an analytical
method. Another approach is to construct a combined catalog. A BAO constraint from
such a catalog seamlessly combines the information from two BAO measurements from autoclustering statistics and one from the cross-clustering between ELG1 and LRG3 (hereafter
‘LRG3×ELG1’). The combined catalog, which we defined as LRG3+ELG1 in Section 2, may
have an additional gain: due to the higher number density, the reconstruction can be more
effective. [47] tested the optimal construction of DESI DR1 LRG3 and ELG1. The work
includes the test of systematics using auto-clustering measurements and the cross-clustering
between the two tracers.
For the unblinded DESI DR1 LRG3+ELG1, we find 11% precision-improvement in αiso
and 14% improvement in αAP relative to LRG3, as shown in Figure 8 and Table 15. This is
highly consistent with the ∼ 10% improvement predicted by [47] based on the mocks.
We find an offset of 0.4% in αiso between LRG3 and LRG3×ELG1 ([47]) and 0.6% between
LRG3 versus LRG3+ELG1 (Table 15). In αAP, we find an offset of 0.4% between LRG3 and
LRG3×ELG1 ([47]) and 1.9% between LRG3+ELG1 (Table 15). These differences are well within
the range covered by the mocks. Therefore, we detect no tracer-dependent bias among the
– 45 –
Figure 13. A comparison of the impact of different pipelines on the derived distances, analyzing the
published BOSS and eBOSS LRG data. There are three groups of points, one for each of the redshift
bins, while the different panels show results for DV /rd, DM/rd, and DH/rd. In each group, the
leftmost point is the published BOSS/eBOSS result. The second point from the left uses the published
correlation functions and covariance matrices, but refits these using the methodology presented in this
paper, while the last two points show the results of reprocessing the BOSS and eBOSS catalogs and
randoms through the full DESI pipeline for different fiducial cosmologies. To make the comparison
more direct (and to leave the covariance matrices unchanged), we use the RecIso reconstruction
scheme here. The fiducial cosmology used to normalize the distance scales on the y-axis is the DESI
fiducial cosmology used in this paper.
DESI DR1 BAO measurements from LRG3, ELG1, LRG3×ELG1, and LRG3+ELG1. With Y3
and Y5, as the completeness of the ELGs increases, we expect a greater improvement from
the combined tracer analysis in terms of reconstruction as well as the systematic test. Note
that we perform only the ξ(r) fit to the combined tracer, as we have only the RascalC
covariance available for the combined tracer.
7.6 Comparison to previous analyses
Given the changes described above in our pipeline, we revisit the SDSS (BOSS and eBOSS)
data previously analyzed to quantify the impact of these changes on previously published
results [159]. We do so in two stages. First, we refit the published correlation functions
(using the published covariance matrices) to measure the distance scale. Second, we rerun
the reconstruction pipeline using our new convention and then re-fit the updated correlation
functions. Figure 13 shows the results of these comparisons for the three redshift bins used
in the SDSS ([159]).
The red point of each group in Figure 13 (first from the left) is the published BOSS/eBOSS
result for α, while the yellow point (second from the left) uses the published correlation functions and covariance matrices, but refits these using the baseline methodology described in
this paper. For the fits performed here, we use damping parameters with Gaussian priors
– 46 –
Tracer z DM/rd DH/rd roff
SDSS published
BOSS LOWZ+CMASS 0.2 - 0.5 10.23 ± 0.17 25.00 ± 0.76 -0.39
BOSS LOWZ+CMASS 0.4 - 0.6 13.36 ± 0.21 22.33 ± 0.58 -0.39
eBOSS LRG 0.6 - 1.0 17.86 ± 0.33 19.33 ± 0.53 -0.33
SDSS published/desilike refit
BOSS LOWZ+CMASS 0.2 - 0.5 10.18 ± 0.15 25.1 ± 0.65 -0.425
BOSS LOWZ+CMASS 0.4 - 0.6 13.35 ± 0.17 22.27 ± 0.43 -0.404
eBOSS LRG 0.6 - 1.0 17.9 ± 0.3 19.16 ± 0.42 -0.416
DESI pipeline
BOSS LOWZ+CMASS 0.2 - 0.5 10.15 ± 0.15 25.10 ± 0.66 -0.45
BOSS LOWZ+CMASS 0.4 - 0.6 13.39 ± 0.17 22.44 ± 0.58 -0.43
eBOSS LRG 0.6 - 1.0 17.72 ± 0.30 19.33 ± 0.41 -0.40
Table 17. Comparison between the SDSS published results and the reanalysis using the DESI
pipeline. Among several options we tested in Section 7.6, we present the DESI reanalysis with IFFT
RecIso under the BOSS fiducial cosmology, to best match the clustering amplitude assumed in the
published covariance matrices. We did not add the SDSS systematic errors in the middle group. We
also did not add the DESI systematic errors from Eq. (5.4) to the bottom group, but the difference
is negligible.
to match this analysis, while the published analyses used a fixed damping scale. The differences between these points are due to two primary factors. The first are changes in how
the BAO features are damped. When computing the theoretical correlation functions in the
previous analyses, the power spectrum was damped by an additional smoothing of 1h
−1 Mpc
to accelerate the convergence of the Hankel transform and reduce ringing. This effectively
changes the damping scales. Furthermore, previous analyses applied the small-scale streaming velocities to both the BAO and the broadband shape, while our current analysis only
applies it to the broadband shape (Section 4.3.4). Additionally, the current analysis has a
new separation of the BAO and broadband shape. The top and middle group of Table 17
shows the net change from all of these effects.
We also explore the effect of different reconstruction conventions using the full DESI
pipeline and setup. We reprocess the BOSS and eBOSS catalogs and randoms using pyrecon
and pycorr under cosmodesi and fit using the fiducial setup of Section 4.3 implemented
in desilike. The two rightmost points in each group of Figure 13 show the results of this
reprocessing, and the bottom group of Table 17 shows their impact. When comparing these
numbers, we emphasize that the exact details of how the data sets are assigned to grids
and padded will also affect the derived displacement fields. These different implementations
should be thought of as yielding different data sets, even though they are derived from the
same initial sets of galaxy positions. Given that the remaining differences are well within
the statistical precision of these samples, we therefore conclude that our new analysis does
yield consistent results with published results. The companion cosmological interpretation
paper [43] will present a detailed consistency check at the level of the underlying cosmological
parameters.
8 The final distance measurements and the Hubble Diagram
In this section, we present our final distance measurements, construct the Hubble diagram,
compare with the previous BAO measurements, and discuss any implications. We adopt the
– 47 –
0.95 1.00 1.05
(DV/rd)/(DV/rd)
fid
0.9
1.0
1.1
(D
H/D
M)/(D
H/D
M)fid
0.9 1.0 1.1
(DH/DM)/(DH/DM)
fid
0.9 1.0
(DH/rd)/(DH/rd)
fid
0.90
0.95
1.00
1.05
(D
M/r
d)/(D
M/r
d)fid
0.94 1.00 1.06
(DM/rd)/(DM/rd)
fid
15 20 25
DM/rd
0.6
1.0
1.4
D
H/D
M
10
20
D
V/r
d
15
20
D
H/r
d
15 20
DH/rd
10 20
DV/rd
0.6 1.0 1.4
DH/DM
BGS
LRG1
LRG2
LRG3
LRG3+ELG1
ELG2
QSO
Figure 14. The final BAO-only distance posteriors, shown as measurements of DM/rd, DH/rd,
DV/rd, and DH/DM, compared against the fiducial Planck 2018-ΛCDM distances. In the bottom
panel, the prediction at the effective redshift of each sample is shown by the black dots along the dashed
lines: zeff = 0.51 (LRG1), 0.71 (LRG2), 0.93 (LRG3), and 1.32 (ELG2). The uncertainty intervals on the
plot do not take account of the systematic errors but doing so would make little visible difference.
– 48 –
0.90
0.95
1.00
1.05
(D
M/r
d)/(D
M/r
d)DESI fid
LRG 0.4 < z < 0.6
LRG 0.6 < z < 0.8
LRG+ELG 0.8 < z < 1.1
ELG 1.1 < z < 1.6
SDSS
DES Y6
0.90
0.95
1.00
1.05
(D
H/r
d)/(D
H/r
d)DESI fid
0.95
1.00
1.05
(D
V/r
d)/(D
V/r
d)DESI fid
BGS
QSO
6dFGS
SDSS
WiggleZ
0.2 0.4 0.6 0.8 1.0 1.2 1.4 1.6
Redshift z
0.95
1.00
1.05
1.10
(D
M/D
H)/(D
M/D
H)DESI fid
Figure 15. Hubble diagram of the BAO distance scales measured from the unblinded galaxy and
quasar data, compared to those from earlier BAO measurements by the 6 degree Field Galaxy Survey
(6dFGS, [27]), WiggleZ [103], the Sloan Digital Sky Survey (SDSS, [159]), and the Dark Energy
Survey (DES Y6, [160]), as labelled. From top to bottom, the panels show DM/rd, DH/rd, DV/rd and
DM/DH, all relative to the respective quantities evaluated in the DESI fiducial cosmology described in
Section 1. For 6dFGS, WiggleZ and some redshift bins of SDSS and DESI, only DV/rd measurements
were possible due to the low signal-to-noise ratio, so these points are only shown in the third panel.
For the DESI and SDSS redshift bins where both DM/rd and DH/rd were measured, results for DV/rd
and DM/DH in the third and fourth panels are displayed with open markers to indicate the repetition
of information in the top two panels in a different parametrisation. Note that a slight offset has been
applied to the effective redshifts of the SDSS results at zeff = 0.51 and 0.70 to avoid overlap and
ensure visibility in this figure.
configuration space measurements as our fiducial results.
– 49 –
Tracer zeff DM/rd DH/rd DV/rd DH/DM roff
BGS 0.30 — — 7.93 ± 0.15 — —
LRG1 0.51 13.62 ± 0.25 20.98 ± 0.61 12.56 ± 0.15 1.542 ± 0.063 −0.445
LRG2 0.71 16.85 ± 0.32 20.08 ± 0.60 15.90 ± 0.20 1.193 ± 0.049 −0.420
LRG3 0.92 21.81 ± 0.31 17.83 ± 0.38 19.82 ± 0.18 0.818 ± 0.025 −0.393
LRG3+ELG1 0.93 21.71 ± 0.28 17.88 ± 0.35 19.86 ± 0.17 0.824 ± 0.022 −0.389
ELG1 0.95 — — 20.01 ± 0.41 — —
ELG2 1.32 27.79 ± 0.69 13.82 ± 0.42 24.13 ± 0.36 0.498 ± 0.023 −0.444
QSO 1.49 — — 26.07 ± 0.67 — —
Table 18. Final summary of the derived BAO distance scales from fits to the post-reconstruction
correlation function multipoles for each DESI target sample, including the systematics from Eqs. (5.1)
and (5.4). We display results in terms of the mean values and standard deviations from the marginalized posteriors of each parameter. roff is the correlation coefficient between DM/rd and DH/rd. The
results in this table are used for the cosmology analysis in [43].
8.1 The final distance measurements with systematics
In Table 18, we combine the best-fit BAO measurements, based on Tables 15 and 16, with
the total systematic error budget from Eqs. (5.1) and (5.4), and present the final distance
posteriors to be used for cosmology inference in [43]. With the knowledge of the fiducial
distance-to-redshift relation and the sound horizon scale used in the analysis, we can convert
the BAO measurements to the distance observables: comoving angular diameter distance
DM(z),
DM(z)
rd
≡
DA(z)[1 + z]
rd
= α⊥
Dfid
M (z)
r
fid
d
, (8.1)
the Hubble distance DH(z),
DH(z)
rd
≡
c
H(z)rd
= α∥
Dfid
H (z)
r
fid
d
, (8.2)
and the spherically-averaged distance DV (z),
DV (z)
rd
≡
[zD2
M(z)DH(z)]1/3
rd
= αiso
Dfid
V
(z)
r
fid
d
. (8.3)
Figure 14 graphically presents our distance constraints of all tracers relative to the
fiducial Planck 2018-ΛCDM distances. The plot shows offsets from the Planck 2018-ΛCDM
predictions for 0.4 < z < 0.6 (LRG1 (zeff = 0.51)) and 0.6 < z < 0.8. The deviation at
LRG1 (zeff = 0.51) is mainly for DH/rd. This means that the line-of-sight BAO scale appears
bigger than the transverse BAO scale, when the observed space is mapped to the physical
space using the metric of the Planck 2018-ΛCDM cosmology.
On the other hand, the deviation at LRG2 (zeff = 0.71) is mainly in DV /rd in DM/rd.
That is, the transverse BAO scale at this redshift appears much larger than the prediction of the Planck 2018-ΛCDM, giving a smaller DV/rd and DM/rd at this redshift. The
cosmological implication of these deviations is extensively tested in [43]. At z > 0.8, our
BAO measurements are consistent with the expansion history predicted by the Planck 2018-
ΛCDM.
We then construct a Hubble diagram using DESI DR1 BAO-only distance measurements
and also with previous spectroscopic BAO measurements overlaid (Figure 15). Again, we
– 50 –
defer the thorough investigation of the cosmological implications of these measurements in
combination with the DESI DR1 Ly-α BAO measurement ([42]) to [43].
8.2 Remarks on the discrepancy between SDSS and DESI over 0.6 < z < 0.8
Figure 15 shows noticeable discrepancy between the DESI DR1 measurement at zeff = 0.71
(LRG2) and SDSS LRG (eBOSS DR16) at zeff = 0.7 (0.6 < z < 0.85). SDSS LRG measured
DM(0.70)/rd = 17.86 ± 0.33 and DH(0.80)/rd = 19.33 ± 0.53, with roff = −0.32 [111],
while this paper reports DM(0.71)/rd = 16.85 ± 0.32, DH(0.71)/rd = 20.08 ± 0.60 with
roff = −0.420 for LRG2.
An approximate estimate of the cross-correlation between the two tracers in the power
spectrum space is 0.21. Assuming that this directly propagates to the cross-correlation of
the BAO measurements, the discrepancy is close to ∼3σ for DM/rd and DV /rd when we
account for the difference between zeff = 0.7 and zeff = 0.71 using the Planck 2018-ΛCDM
cosmology.31
An insight gleaned from Section 7.6 and numerous robustness tests conducted in this
paper is that an estimator derived from a particular dataset undergoing different pipelines can
be regarded as two distinct yet unbiased estimators of the truth, provided each is individually
demonstrated to be unbiased. Hence, the cross-correlation coefficient could be much lower
than the theoretical estimate, suggesting that the observed 3σ discrepancy between SDSS and
DESI is likely an upper limit. However, the lower limit, determined assuming no correlation,
is still 2.7σ. The DESI reanalysis in Table 17 yields a slightly lower BAO measurement
compared to the published SDSS measurements, resulting in significances of 2.8σ and 2.5σ,
assuming cross-correlations of 0.21 and 0, respectively.
While this 2.5σ–3σ discrepancy warrants attention, we have not identified any sources
of non-statistical discrepancy from both sets of the data. We reiterate the significant value
of a blinded analysis of DESI DR1, conducted and unblinded without being affected by prior
knowledge of any discrepancies compared to previous measurements. We anticipate gaining
a deeper understanding of its nature through the analysis of DESI Y3 and Y5 data.
9 Conclusion
In this paper, we presented the first BAO scale measurements32 from the DESI galaxies and
quasars since the start of its data collection in 2021. The measurements from DESI DR1
include over 5.7 million galaxy and quasar redshifts over the redshift range of 0.1 < z < 2.1,
with the total effective survey volume of ∼ 18 Gpc3
.
33 This marks the largest volume and
the most redshifts used for any spectroscopic BAO measurements. We summarize the final
distance constraints for six redshift bins, detailed in Table 18, as:
• Distance precision (i.e., DV/rd) ranges of 1.9% (BGS at zeff = 0.3), 1.2% (LRG1 at
zeff = 0.51), 1.2% (LRG2 at zeff = 0.71), 0.8% (LRG3+ELG1 at zeff ∼ 0.95), 1.5%
(ELG2 at zeff = 1.32), and 2.6% (QSO at zeff = 1.49). The aggregate precision of all
measurements is 0.52% on the BAO scale.
31DM(0.71)/DM(0.7)]fid = 1.011.
32Previously, we reported the first detection of the DESI DR1 BAO [40] using the first two months of the
DESI data without presenting the BAO scales.
33Computed using QSO only over 1.1 < z < 1.6.
– 51 –
• The anisotropic distortion of the BAO (i.e., DH/DM) is measured with the precision of
4.1% (LRG1), 4.1% (LRG2), 2.7% (LRG3+ELG1), and 4.6% (QSO).
Our measurement marks the highest precision on the cosmological distances for z > 0.8,
compared to the previous survey, and also collectively marks the highest aggregate precision.
Comparing this with the SDSS BAO measurements ([159, 161]), which report an aggregate
precision of 0.64% on DV /rd for all galaxy and quasar tracers combined, the aggregate
precision of DESI DR1 in this paper returns 0.52%. The detection levels range from the
highest 9.1σ for LRG3+ELG1 to the lowest 4.0σ for BGS. We produced the first high-significance
BAO detection using galaxies z > 1, i.e., ELG2 at the significance of 7.0σ. Proving the robust
nature of the BAO for ELGs, despite its substantial imaging systematics, is an important
result for upcoming Stage-V BAO surveys.
Alongside the state-of-the-art dataset, the DESI DR1 BAO analysis incorporated several significant novel elements. Our analysis is one of the first to rigorously implement
blinding in the BAO analysis (c.f. [160]) and the first catalog-level blinded BAO analysis
(Section 2.3). This approach was adopted to mitigate confirmation bias. The true clustering
was unveiled only once the blinded catalogs successfully passed a series of unblinding tests
(refer to Section 6). Anticipating the unprecedented precision of DESI BAO beyond DESI
DR1, our analysis incorporated physically motivated enhancements to the BAO fitting and
reconstruction methods from previous surveys. This included the adoption of a new reconstruction method (Section 4.2) and improved treatment for separating BAO from broadband
signals (Section 4.3). We introduced a spline-based broadband model to reduce parameterization dependence on data signal-to-noise. We constructed and analyzed a combined tracer
catalog for LRGs and ELGs spanning 0.8 < z < 1.1, merging information from both tracers
and facilitating an additional systematic test (refer to Section 7.5). This approach yielded an
improvement of approximately 10%, with even greater improvements anticipated for future
DESI analyses.
We employed a unified BAO analysis pipeline and methodology across all galaxy and
quasar tracers, as well as between configuration space and Fourier space, marking a first in
BAO surveys. The algorithms utilized in this study are incorporated into a publicly accessible
repository developed by the collaboration,34 with some currently available and others planned
for future release. We meticulously coordinated a systematic study across all tracers and
components. Our investigation covered theoretical modeling effects (Section 4.4), tracerspecific systematics (Section 5.2), assumptions regarding fiducial cosmology (Section 5.4),
observational systemtaics (Section 5.3), reconstruction algorithm choices (Section 4.2), and
covariance matrix choice (Section 4.5). Summary of these findings is provided in Table 13,
yielding conservative systematics estimates of 0.245% for the isotropic BAO scale and 0.300%
for the anisotropic distortion of the BAO feature (i.e., the Alcock-Paczynski effect). Further
details are available in supporting papers listed in Table 1.
To quantify the impact of the changes we made in the DESI pipeline, we revisited the
SDSS BAO measurements using the DESI pipelines. We conclude that the two measurement
pipelines yield sufficiently similar results for these datasets (refer to Section 7.6), although
we anticipate that the new method will be advantageous for the higher-precision dataset
expected in the future.
From the Hubble diagram constructed from our results, we found that our BAO measurements indicate systematically larger observed BAO scales than the prediction of Planck
34https://github.com/cosmodesi
– 52 –
2018-ΛCDM at z < 0.8, and therefore lower distances. For zeff = 0.51, this discrepancy is
sourced from the line-of-sight BAO: it appears bigger than the transverse BAO scale, when
the observed space is mapped to the physical space using the metric of the Planck 2018-
ΛCDM cosmology. For zeff = 0.71, the discrepancy is sourced from the overall size of the
BAO (and more transverse than the line-of-sight). The transverse BAO scale at this redshift appears much larger than the prediction of the Planck 2018-ΛCDM, implying a smaller
DV/rd and DM/rd at this redshift. Accordingly, we found a large discrepancy between the
DESI BAO measurement at zeff = 0.71 and the SDSS measurement at zeff = 0.7. The level of
discrepancy is ∼3σ on DM/rd. At z > 0.8, our BAO measurements are consistent with that
of the Planck 2018-ΛCDM. We emphasize the value of our blinded analysis in achieving the
DESI DR1 BAO measurements without prior knowledge of comparisons with previous measurements. An extensive investigation on the cosmological implication of these discrepancies
from Planck 2018-ΛCDM, in combination with the BAO measurement from the Lyman-α
forest ([42]), is presented in the DESI DR1 cosmology paper, [43].
Assuming the same sample definitions (which are conservative for DESI DR1), the final
DESI dataset will be more than a factor of 3 in terms of the effective volume (4-5 for ELGs,
∼ 3 for LRGs, and 2-3 for BGS and QSO) compared to DESI DR1, using more than 20 million
unique redshifts. Through the analysis of the DESI Y3 and Y5 data, we anticipate to gain a
deeper understanding of the nature of the intriguing measurements we observed.