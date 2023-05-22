const txt1 = document.getElementById('txt1');
const btn = document.getElementById('btn');
const txt2 = document.getElementById('txt2');

function deal_str() {
  const data = {};
  const lt = txt1.value.trim().split('\n').filter(x => x);
  for (let i = 0; i < lt.length; i++) {
    const each = lt[i];
    const ind = each.indexOf(':', 1);
    let key = ind > 0 ? each.slice(0, ind) : each.slice(0);
    let word = ind > 0 ? each.slice(ind+1) : '';
    key = key.trim();
    word = word.trim();
    data[key] = word;
  }
  return data;
}

function format_str() {
  txt2.value = '';
  console.log(deal_str());
  try {
    const data = deal_str();
    if (Object.keys(data).length === 0) {
      return;
    }
  } catch {
    txt2.value = '转换失败';
    return;
  }
  const json_str = JSON.stringify(deal_str(), null, 4);
  txt2.value = json_str;
  txt2.focus();
}

btn.addEventListener('click', format_str);

