---
title: "Notes on RFC 761"
date: 2025-06-07
author: "Yudhister Kumar"
path: "rfc-761"
---

> TCP implementations should follow a general principle of robustness: be conservative in what you do, be liberal in what you accept from others.

The original TCP specification is explicitly designed to be agnostic to IP implementation. It's only supposed to handle byte transfer from application to application, not the specifics of packet delivery between hosts. In practice, this ideal is unattainable[^1], but it points at a deep truth about healthy integration of parts in systems.

Modularity is a natural consequence of system complexification. Internal bottlenecks on information transfer necessitate internal specialization[^2]. Dually, effective modularity requires partwise efficiency: judicious outputs and robustness to inputs, through either filtration or error-correction.

Cells have well-defined outputs and boundaries which protect them from harmful inputs. Organs as well. Intuitively, the "conservative output, liberal input" principle could be reformulated as a "specific function, high survivability" dogma which we find exhibited in biological systems.

Admittedly, TCP has more in common with the blood-brain barrier than it does with the liver. But the Internet is special in that the design of transportation organs is centralized while the design of substantive organs is not, and as a result boundary-manufacture is a centralized process. Insofar as the success of biological systems is to be attributed to organ-organ boundaries, those same properties may be reflected in TCP.

As the Internet scaled to tens of thousands of simultaneous hosts operating on the same network, the RFC 761 implementation could no longer support reasonable host to host communication without congestion collapse, requiring updates to the default TCP. Yet modern TCPs are backwards compatible with TCPs from 1980, in part because the abstraction was so well-designed.

[^1]: One example is TCP's checksum operation: it relies on IP address structure, so it had to be slightly modified to accomodate IPv6.

[^2]: Eukaryotic protein connectomes have higher EI than prokaryotic ones. As arbitrary protein-protein interaction takes more energy, efficient configurations will exhibit clustering of function.
