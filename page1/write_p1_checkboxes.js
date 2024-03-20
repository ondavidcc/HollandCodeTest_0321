document.addEventListener("DOMContentLoaded", function() {

fetch('HollandCodeTest/data/occupations.json')
  .then(response => response.json())
  .then(data => {
    let RJobs = data.filter((j)=>j.CODE.charAt(0) == "R");
    let IJobs = data.filter((j)=>j.CODE.charAt(0)=="I");
    let AJobs = data.filter((j)=>j.CODE.charAt(0)=="A");
    let SJobs = data.filter((j)=>j.CODE.charAt(0)=="S");
    let EJobs = data.filter((j)=>j.CODE.charAt(0)=="E");
    let CJobs = data.filter((j)=>j.CODE.charAt(0)=="C");

    let maxLength = Math.max(...[RJobs.length, IJobs.length, AJobs.length, SJobs.length, EJobs.length, CJobs.length]);

    for (let i = 0; i<maxLength; i++){
      if(RJobs[i]) writeCheckbox(RJobs[i]);
      if(IJobs[i]) writeCheckbox(IJobs[i]);
      if(AJobs[i]) writeCheckbox(AJobs[i]);
      if(SJobs[i]) writeCheckbox(SJobs[i]);
      if(EJobs[i]) writeCheckbox(EJobs[i]);
      if(CJobs[i]) writeCheckbox(CJobs[i]);
    }

  })
  .catch(error => console.error('Error loading JSON:', error));
});

function writeCheckbox(job){
  // console.log(job);
  const checkboxContainer = document.getElementById('checkboxContainer');
  const div = document.createElement('div');
  div.className = 'checkboxShell';
  checkboxContainer.appendChild(div);
  const checkboxShell = checkboxContainer.lastChild;
  
  // 生成checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className ='checkbox';
  checkbox.id = `${job.ID}`;
  checkbox.name = job.ID;

  //當checkbox被選取時更新selectCounter文字，作為計數器
  checkbox.onchange = () => {
    let checkedCheckboxes = document.querySelectorAll('.checkbox:checked');
    document.getElementById('selectCounter').innerHTML = `您目前選擇的職業張數為：${checkedCheckboxes.length} 張`;
  }
  
  // 生成label
  const label = document.createElement('label');
  label.htmlFor = `${job.ID}`;
  label.appendChild(document.createTextNode(job.JOB));
  
  // 将checkbox和label添加到容器中
  checkboxShell.appendChild(checkbox);
  checkboxShell.appendChild(label);
}
