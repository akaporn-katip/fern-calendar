export default function Calendar() {
  return (
    <div className="flex flex-col text-white gap-2 w-60 aspect-[4/3]">
      <div className="flex justify-between  text-lg">
        <div>{"<"}</div>
        <h2>8, 2024</h2>
        <div>{">"}</div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="text-sunday">Sun</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>Sat</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
      </div>
      <div className="flex justify-center text-lg pt-4">
        <span className="text-sm">Have a nice day!!</span>
      </div>
    </div>
  );
}
