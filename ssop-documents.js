/* ============================================================
   WEST END CLEANING SERVICES — SSOP DOCUMENT LIBRARY
   Shared document templates (British English)
   ============================================================ */

const SSOP_COMPANY_NAME = 'West End Cleaning Services';

const SSOP_DOCUMENTS = {
    'fire-safety': {
        id: 'fire-safety',
        title: 'Fire Safety SSOP',
        fullTitle: 'Fire Safety Standard Operating Procedure (SSOP)',
        version: 'Audit Version 1.0',
        icon: '🔥',
        description: 'Workplace fire safety procedures, evacuation plan and legal compliance.',

        render: function (options) {
            options = options || {};
            const today = new Date();
            const defaultReview = new Date(today);
            defaultReview.setFullYear(defaultReview.getFullYear() + 1);

            // Accepts 'yyyy-mm-dd' strings (from date inputs / Supabase date columns)
            const parseDate = v => v ? new Date(v + 'T00:00:00') : null;
            const issueDate = parseDate(options.issueDate) || today;
            const reviewDate = parseDate(options.reviewDate) || defaultReview;

            const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

            const sectionHead = (num, text) => `
                <h2 class="doc-section-title flex items-center gap-2.5 text-sm md:text-base font-black text-[#547C44] uppercase tracking-wide mt-7 mb-2.5">
                    <span class="w-7 h-7 shrink-0 bg-[#547C44] text-white rounded-lg flex items-center justify-center text-xs font-black shadow-sm">${num}</span>
                    <span>${text}</span>
                </h2>`;

            const bullet = text => `
                <li class="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <span class="text-[#547C44] font-black shrink-0">•</span><span>${text}</span>
                </li>`;

            const crossItem = text => `
                <li class="flex gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <span class="text-red-500 font-black shrink-0">✗</span><span>${text}</span>
                </li>`;

            return `
            <!-- ============ DOCUMENT HEADER ============ -->
            <div class="rounded-t-2xl overflow-hidden shadow-sm">
                <div class="bg-[#547C44] text-white px-6 md:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <p class="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold opacity-80">${SSOP_COMPANY_NAME}</p>
                        <h1 class="text-xl md:text-2xl font-black mt-1.5 leading-tight">Fire Safety Standard<br>Operating Procedure (SSOP)</h1>
                    </div>
                    <img src="logo.png" alt="${SSOP_COMPANY_NAME}" class="h-14 md:h-16 bg-white rounded-xl p-1.5 object-contain shadow-md" onerror="this.style.display='none'">
                </div>
                <div class="bg-[#436435] text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest px-6 md:px-8 py-2.5 flex flex-wrap justify-between gap-2">
                    <span>Audit Version 1.0</span>
                    <span>Health & Safety Compliance Document</span>
                </div>
            </div>

            <!-- ============ DOCUMENT CONTROL ============ -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden mt-5 text-sm doc-section">
                <div class="bg-slate-50 p-3">
                    <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Version</p>
                    <p class="font-bold text-slate-800 text-xs md:text-sm">Audit 1.0</p>
                </div>
                <div class="bg-slate-50 p-3">
                    <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Issue Date</p>
                    <p class="font-bold text-slate-800 text-xs md:text-sm" id="doc-issue-date">${fmt(issueDate)}</p>
                </div>
                <div class="bg-slate-50 p-3">
                    <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Review Date</p>
                    <p class="font-bold text-slate-800 text-xs md:text-sm" id="doc-review-date">${fmt(reviewDate)}</p>
                </div>
                <div class="bg-slate-50 p-3">
                    <p class="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Approved By</p>
                    <p class="font-bold text-slate-800 text-xs md:text-sm">Management</p>
                </div>
            </div>

            <!-- ============ 1. PURPOSE ============ -->
            <div class="doc-section">
                ${sectionHead(1, 'Purpose')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">This document defines the fire safety procedures for all employees of ${SSOP_COMPANY_NAME} to ensure compliance with workplace fire safety regulations and audit requirements. The purpose is to:</p>
                <ul class="space-y-1.5">
                    ${bullet('Prevent fire incidents in the workplace')}
                    ${bullet('Ensure the safe evacuation of all personnel')}
                    ${bullet('Define clear responsibilities for staff')}
                    ${bullet('Ensure compliance with health & safety audit standards (ISO / HSE)')}
                    ${bullet('Minimise risk to life, property and operations')}
                </ul>
            </div>

            <!-- ============ 2. SCOPE ============ -->
            <div class="doc-section">
                ${sectionHead(2, 'Scope')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">This procedure applies to:</p>
                <ul class="space-y-1.5">
                    ${bullet('All employees')}
                    ${bullet('Cleaning operatives')}
                    ${bullet('Supervisors and managers')}
                    ${bullet('Temporary and agency staff')}
                    ${bullet('Contractors working under ' + SSOP_COMPANY_NAME)}
                </ul>
            </div>

            <!-- ============ 3. RESPONSIBILITIES ============ -->
            <div class="doc-section">
                ${sectionHead(3, 'Fire Safety Responsibilities')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">All staff must:</p>
                <ul class="space-y-1.5">
                    ${bullet('Follow fire safety instructions at all times')}
                    ${bullet('Keep escape routes and exits clear')}
                    ${bullet('Report fire hazards immediately')}
                    ${bullet('Never block fire doors or emergency exits')}
                    ${bullet('Never tamper with fire safety equipment')}
                    ${bullet('Participate in fire drills')}
                    ${bullet('Know evacuation routes and assembly points')}
                </ul>
            </div>

            <!-- ============ 4. FIRE PREVENTION ============ -->
            <div class="doc-section">
                ${sectionHead(4, 'Fire Prevention Rules')}
                <div class="space-y-4">
                    <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <h3 class="text-xs font-black text-slate-800 uppercase tracking-widest mb-2">4.1 Electrical Safety</h3>
                        <ul class="space-y-1.5">
                            ${bullet('Do not use damaged equipment')}
                            ${bullet('Report faulty wiring immediately')}
                            ${bullet('Do not overload sockets')}
                            ${bullet('Switch off equipment after use')}
                        </ul>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <h3 class="text-xs font-black text-slate-800 uppercase tracking-widest mb-2">4.2 Housekeeping</h3>
                        <ul class="space-y-1.5">
                            ${bullet('Keep work areas clean and free of waste')}
                            ${bullet('Remove flammable materials regularly')}
                            ${bullet('Do not store items in corridors or exits')}
                        </ul>
                    </div>
                    <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <h3 class="text-xs font-black text-slate-800 uppercase tracking-widest mb-2">4.3 Smoking Policy</h3>
                        <ul class="space-y-1.5">
                            ${bullet('Smoking is only permitted in designated areas (where applicable)')}
                            ${bullet('Dispose of cigarette waste safely')}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- ============ 5. FIRE EXITS ============ -->
            <div class="doc-section">
                ${sectionHead(5, 'Fire Exits & Escape Routes')}
                <ul class="space-y-1.5">
                    ${bullet('Must remain clear at all times')}
                    ${bullet('Must never be blocked or locked')}
                    ${bullet('Must be accessible during all working hours')}
                    ${bullet('Staff must know at least two escape routes')}
                </ul>
            </div>

            <!-- ============ 6. FIRE DOORS ============ -->
            <div class="doc-section">
                ${sectionHead(6, 'Fire Doors')}
                <ul class="space-y-1.5">
                    ${bullet('Must remain closed at all times')}
                    ${bullet('Must never be wedged open')}
                    ${bullet('Any damage must be reported immediately')}
                </ul>
            </div>

            <!-- ============ 7. IN CASE OF FIRE ============ -->
            <div class="doc-section">
                ${sectionHead(7, 'In Case of Fire')}
                <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p class="text-sm font-bold text-red-800 mb-2">If a fire is discovered:</p>
                    <ol class="space-y-1.5">
                        ${[1, 2, 3, 4, 5, 6].map((n, i) => `
                        <li class="flex gap-2.5 text-sm text-slate-800 leading-relaxed">
                            <span class="w-5 h-5 shrink-0 bg-red-500 text-white rounded-md flex items-center justify-center text-[10px] font-black">${n}</span>
                            <span>${['Activate the fire alarm immediately', 'Call the emergency services (999)', 'Evacuate the building immediately', 'Do not collect personal belongings', 'Proceed to the assembly point', 'Await instructions from management or the emergency services'][i]}</span>
                        </li>`).join('')}
                    </ol>
                </div>
            </div>

            <!-- ============ 8. FIRE ALARM ============ -->
            <div class="doc-section">
                ${sectionHead(8, 'Fire Alarm Procedure')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">When the alarm sounds:</p>
                <ul class="space-y-1.5">
                    ${bullet('Stop all work immediately')}
                    ${bullet('Leave by the nearest safe exit')}
                    ${bullet('Do not use lifts')}
                    ${bullet('Assist others if it is safe to do so')}
                    ${bullet('Proceed to the assembly point')}
                    ${bullet('Do not re-enter the building')}
                </ul>
            </div>

            <!-- ============ 9. EXTINGUISHERS ============ -->
            <div class="doc-section">
                ${sectionHead(9, 'Fire Extinguishers')}
                <ul class="space-y-1.5">
                    ${bullet('Only trained staff may use extinguishers')}
                    ${bullet('Only attempt to extinguish a fire if it is small and safe to do so')}
                    ${bullet('Always ensure a clear escape route')}
                    ${bullet('If in doubt, evacuate immediately')}
                </ul>
            </div>

            <!-- ============ 10. ASSEMBLY POINT ============ -->
            <div class="doc-section">
                ${sectionHead(10, 'Assembly Point')}
                <div class="bg-[#547C44]/5 border border-[#547C44]/20 rounded-xl p-4">
                    <p class="text-sm text-slate-700 leading-relaxed">All staff must report to the <strong>designated assembly point</strong> for the site during an evacuation and remain there until instructed otherwise by management or the emergency services.</p>
                </div>
            </div>

            <!-- ============ 11. REPORTING HAZARDS ============ -->
            <div class="doc-section">
                ${sectionHead(11, 'Reporting Fire Hazards')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">Report the following immediately:</p>
                <ul class="space-y-1.5 mb-3">
                    ${bullet('Blocked exits')}
                    ${bullet('Faulty electrical equipment')}
                    ${bullet('Fire door damage')}
                    ${bullet('Smell of burning or smoke')}
                    ${bullet('Overloaded sockets')}
                    ${bullet('Unsafe storage of materials')}
                </ul>
                <p class="text-sm text-slate-700 leading-relaxed"><strong>Report to:</strong> your supervisor or line manager immediately.</p>
            </div>

            <!-- ============ 12. PROHIBITED ACTIONS ============ -->
            <div class="doc-section">
                ${sectionHead(12, 'Prohibited Actions')}
                <div class="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p class="text-sm font-bold text-red-800 mb-2">Staff must NOT:</p>
                    <ul class="space-y-1.5">
                        ${crossItem('Block emergency exits')}
                        ${crossItem('Tamper with fire alarms')}
                        ${crossItem('Wedge fire doors open')}
                        ${crossItem('Use damaged electrical equipment')}
                        ${crossItem('Ignore fire alarms')}
                        ${crossItem('Re-enter the building during an evacuation')}
                    </ul>
                </div>
            </div>

            <!-- ============ 13. TRAINING ============ -->
            <div class="doc-section">
                ${sectionHead(13, 'Training & Compliance')}
                <ul class="space-y-1.5">
                    ${bullet('All staff must receive fire safety induction training')}
                    ${bullet('Fire drills must be attended')}
                    ${bullet('Training records must be maintained for audit purposes')}
                    ${bullet('Non-compliance may result in disciplinary action')}
                </ul>
            </div>

            <!-- ============ 14. AUDIT COMPLIANCE ============ -->
            <div class="doc-section">
                ${sectionHead(14, 'Audit Compliance Statement')}
                <p class="text-sm text-slate-700 leading-relaxed mb-2">This SSOP is designed to comply with:</p>
                <ul class="space-y-1.5">
                    ${bullet('Health and Safety at Work etc. Act 1974')}
                    ${bullet('Regulatory Reform (Fire Safety) Order 2005')}
                    ${bullet('ISO 45001 (Occupational Health & Safety) requirements')}
                    ${bullet('Internal company safety standards')}
                </ul>
            </div>

            <!-- ============ 15. EMPLOYEE DECLARATION + SIGNATURE ============ -->
            <div class="doc-section mt-8 border-2 border-[#547C44] rounded-2xl overflow-hidden">
                <div class="bg-[#547C44] px-5 py-3">
                    <h2 class="text-sm md:text-base font-black text-white uppercase tracking-wide flex items-center gap-2.5">
                        <span class="w-7 h-7 shrink-0 bg-white text-[#547C44] rounded-lg flex items-center justify-center text-xs font-black">15</span>
                        Employee Declaration
                    </h2>
                </div>
                <div class="p-5 bg-white">
                    <p class="text-sm font-bold text-slate-800 mb-2">I confirm that:</p>
                    <ul class="space-y-1.5 mb-4">
                        ${bullet('I have read and understood this Fire Safety SSOP')}
                        ${bullet('I will follow all procedures outlined in this document')}
                        ${bullet('I understand my responsibilities in case of fire')}
                        ${bullet('I will participate in fire drills and training')}
                    </ul>

                    <label class="flex items-start gap-3 bg-[#547C44]/5 border border-[#547C44]/20 rounded-xl p-3.5 cursor-pointer select-none">
                        <input type="checkbox" id="declare-check" class="mt-0.5 w-5 h-5 accent-[#547C44] shrink-0 cursor-pointer">
                        <span class="text-sm text-slate-800 font-medium leading-snug">I have read, understood and agree to comply with this Fire Safety Standard Operating Procedure.</span>
                    </label>

                    <div class="grid md:grid-cols-2 gap-4 mt-5">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Employee Full Name</label>
                            <input type="text" id="employee-name-input" class="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-[#547C44] focus:ring-2 focus:ring-[#547C44]/20 transition-all" placeholder="Enter your full name" autocomplete="name">
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Date</label>
                            <div class="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-sm font-bold text-slate-800" id="sign-date-display">${fmt(today)}</div>
                        </div>
                    </div>

                    <div class="mt-5">
                        <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Employee Signature</label>
                        <div id="signature-canvas-wrap" class="relative">
                            <canvas id="signature-canvas" width="640" height="180" class="w-full h-36 md:h-44 border-2 border-dashed border-slate-300 rounded-xl bg-white cursor-crosshair" style="touch-action:none"></canvas>
                            <span class="absolute bottom-2.5 right-3 text-[10px] text-slate-400 font-bold uppercase tracking-widest pointer-events-none no-print" id="sign-here-hint">Sign here</span>
                        </div>
                        <div class="flex justify-end mt-1.5 no-print">
                            <button type="button" onclick="clearSignature()" class="text-[11px] font-bold text-red-500 hover:text-red-700 transition-colors">✕ Clear signature</button>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-200">
                        <div>
                            <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Supervisor Name</label>
                            <input type="text" id="supervisor-name-input" class="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-[#547C44] focus:ring-2 focus:ring-[#547C44]/20 transition-all" placeholder="Supervisor / Manager">
                        </div>
                    </div>
                </div>
            </div>

            <!-- ============ DOCUMENT CONTROL FOOTER ============ -->
            <div class="doc-section mt-8 pt-4 border-t-2 border-slate-200">
                <div class="flex flex-col md:flex-row justify-between gap-2 text-xs text-slate-500">
                    <p><span class="font-bold text-slate-600">Document:</span> Fire Safety SSOP</p>
                    <p><span class="font-bold text-slate-600">Version:</span> Audit Version 1.0</p>
                    <p><span class="font-bold text-slate-600">Next Review:</span> <span id="doc-review-date-footer">${fmt(reviewDate)}</span></p>
                </div>
            </div>
            `;
        }
    }
};

/* ============================================================
   SHARED HELPERS
   ============================================================ */

/** Initialise a signature pad on a canvas (mouse + touch support). */
function initSignaturePad(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2.4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1e293b';

    let drawing = false, lastX = 0, lastY = 0;

    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const cx = (e.touches && e.touches.length) ? e.touches[0].clientX : e.clientX;
        const cy = (e.touches && e.touches.length) ? e.touches[0].clientY : e.clientY;
        return {
            x: (cx - rect.left) * (canvas.width / rect.width),
            y: (cy - rect.top) * (canvas.height / rect.height)
        };
    }

    function start(e) {
        e.preventDefault();
        drawing = true;
        const p = getPos(e);
        lastX = p.x; lastY = p.y;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + 0.1, p.y + 0.1);
        ctx.stroke();
        const hint = document.getElementById('sign-here-hint');
        if (hint) hint.style.display = 'none';
    }

    function move(e) {
        if (!drawing) return;
        e.preventDefault();
        const p = getPos(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        lastX = p.x; lastY = p.y;
    }

    function end() { drawing = false; }

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    canvas.addEventListener('touchstart', start, { passive: false });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', end);
}

/** Clear the signature canvas. */
function clearSignature() {
    const canvas = document.getElementById('signature-canvas');
    if (!canvas) return;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    const hint = document.getElementById('sign-here-hint');
    if (hint) hint.style.display = '';
}

/** Check whether the signature canvas is blank. */
function isSignatureBlank() {
    const canvas = document.getElementById('signature-canvas');
    if (!canvas) return true;
    const blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
}

/** Get the signature as a PNG data URL. */
function getSignatureDataURL() {
    const canvas = document.getElementById('signature-canvas');
    return canvas ? canvas.toDataURL('image/png') : null;
}
